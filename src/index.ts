import cors from "cors";
import express from "express";
import type { NextFunction, Request, Response } from "express";
import fs from "fs";
import http from "http";
import https from "https";
import path from "path";

import { App, type HttpMethod, type HttpRouteHandler, type IHttpServerAdapter } from "@microsoft/teams.apps";
import { ConsoleLogger } from "@microsoft/teams.common/logging";

type NodeServer = http.Server | https.Server;

class HttpsExpressAdapter implements IHttpServerAdapter {
  readonly get: express.Application["get"];

  private readonly app: express.Application;
  private readonly server: NodeServer;
  private readonly logger = new ConsoleLogger("HttpsExpressAdapter");

  constructor(server: NodeServer) {
    this.app = express();
    this.server = server;
    this.server.on("request", this.app);

    this.get = this.app.get.bind(this.app);
  }

  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    if (method !== "POST") {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    this.app.post(path, express.json(), async (req: Request, res: Response, next: NextFunction) => {
      try {
        const headers: Record<string, string | string[]> = {};
        for (const [key, value] of Object.entries(req.headers)) {
          if (typeof value === "string" || Array.isArray(value)) {
            headers[key] = value;
          }
        }

        const response = await handler({
          body: req.body,
          headers,
        });

        res.status(response.status).send(response.body);
      } catch (err) {
        next(err);
      }
    });
  }

  async start(port: number | string): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server.once("error", (err) => reject(err));
      this.server.listen(port, () => {
        this.logger.info(`listening on port ${port} 🚀`);
        resolve();
      });
    });
  }

  serveStatic(path: string, directory: string): void {
    this.app.use(path, cors(), express.static(directory));
  }

  async stop(): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  }
}

const sslOptions = {
  key: process.env.SSL_KEY_FILE ? fs.readFileSync(process.env.SSL_KEY_FILE) : undefined,
  cert: process.env.SSL_CRT_FILE ? fs.readFileSync(process.env.SSL_CRT_FILE) : undefined,
};

const server =
  sslOptions.cert && sslOptions.key
    ? https.createServer(sslOptions)
    : http.createServer();

const app = new App({
  logger: new ConsoleLogger("tab", { level: "debug" }),
  httpServerAdapter: new HttpsExpressAdapter(server),
});

const tabDistDir = path.join(__dirname, "./client");
app.tab("home", tabDistDir);

// Support SPA deep links like /tabs/home/test when using BrowserRouter
const adapter = app.server.adapter as unknown as {
  get?: (
    path: string,
    handler: (_req: unknown, res: { sendFile: (filePath: string) => unknown }) => void
  ) => unknown;
};

if (typeof adapter.get === "function") {
  adapter.get("/tabs/home/*path", (_req, res) => {
    res.sendFile(path.join(tabDistDir, "index.html"));
  });
}

(async () => {
  await app.start(+(process.env.PORT || 3978));
})();
