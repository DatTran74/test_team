import React from "react";
import * as teamsJs from "@microsoft/teams-js";

import "./App.css";
import TabRouter from "../router/router";

export default function App() {
  React.useEffect(() => {
    const initTeams = async () => {
      try {
        await teamsJs.app.initialize();
        await teamsJs.app.notifySuccess();
      } catch {
        // Running outside Teams (local browser preview)
      }
    };

    void initTeams();
  }, []);

  return (
    <div className="App">
      <TabRouter />
    </div>
  );
}
