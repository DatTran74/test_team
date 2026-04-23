import type { ReactNode } from "react";

import { Bell } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import svgPaths from "../test/svg-mi75i29jd8";

function LegacyIconHome({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24.6 23.4467"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p1cea9bc0}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d={svgPaths.p8528500}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LegacyIconFlow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 25.7502 25.75"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p2d9be080}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path d={svgPaths.p23a5ae00} stroke="currentColor" strokeWidth="1.75" />
      <path
        d={svgPaths.p1ca02740}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
      <path d={svgPaths.p2e73ef00} stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function LegacyIconMatrix({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24.6 23.4501"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p27479280}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d={svgPaths.p238b9300}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LegacyIconReports({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24.6 24.6011"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p1b098b00}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d={svgPaths.p1f0ab700}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LegacyIconSettings({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24.6006 25.1838"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p7048390}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
      <path
        d={svgPaths.p22502d10}
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function LegacyIconSupport({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 24.6 22.2996"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p29c92900}
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path
        d={svgPaths.p2b08b500}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d={svgPaths.p2d06b500} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SideIconLink({
  to,
  label,
  children,
}: {
  to: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <NavLink
      to={to}
      aria-label={label}
      title={label}
      className={({ isActive }) =>
        [
          "relative mx-1 flex items-center justify-center rounded-md px-2 py-2 transition-colors",
          "hover:bg-sidebar-accent",
          isActive
            ? "bg-sidebar-accent before:absolute before:left-0 before:top-1/2 before:h-8 before:w-1 before:-translate-y-1/2 before:rounded-r before:bg-sidebar-primary"
            : "",
        ].join(" ")
      }
    >
      {({ isActive }) => (
        <div className="flex w-full flex-col items-center gap-1">
          <div
            className={[
              "grid h-8 w-8 place-items-center rounded-md",
              isActive ? "text-sidebar-primary" : "text-sidebar-foreground",
            ].join(" ")}
          >
            {children}
          </div>
          <div
            className={[
              "text-[10px] font-medium leading-none",
              isActive ? "text-sidebar-foreground" : "text-muted-foreground",
            ].join(" ")}
          >
            {label}
          </div>
        </div>
      )}
    </NavLink>
  );
}

export default function PlatformLayout() {
  const { pathname } = useLocation();

  const hero = (() => {
    if (pathname.startsWith("/home")) {
      return { title: "HOME", Icon: LegacyIconHome, crumbs: [] as string[] };
    }

    if (pathname === "/flow") {
      return {
        title: "WORKFLOW",
        Icon: LegacyIconFlow,
        crumbs: ["Create flow"],
      };
    }

    if (pathname.startsWith("/flow/")) {
      const workflowId = decodeURIComponent(
        pathname.slice("/flow/".length).split("/")[0] || ""
      );
      return {
        title: "WORKFLOW",
        Icon: LegacyIconFlow,
        crumbs: ["Request Manager", workflowId || "(unknown)"],
      };
    }

    if (pathname.startsWith("/matrix")) {
      return { title: "MATRIX", Icon: LegacyIconMatrix, crumbs: [] as string[] };
    }

    if (pathname.startsWith("/reports")) {
      return { title: "REPORTS", Icon: LegacyIconReports, crumbs: [] as string[] };
    }

    if (pathname.startsWith("/settings")) {
      return { title: "SETTINGS", Icon: LegacyIconSettings, crumbs: [] as string[] };
    }

    if (pathname.startsWith("/support")) {
      return { title: "SUPPORT", Icon: LegacyIconSupport, crumbs: [] as string[] };
    }

    return { title: "HOME", Icon: LegacyIconHome, crumbs: [] as string[] };
  })();

  const HeroIcon = hero.Icon;

  return (
    <div className="h-full w-full overflow-hidden bg-background text-foreground">
      <div className="flex h-full min-h-0">
        {/* Teams-like left rail */}
        <aside className="relative z-10 w-[72px] shrink-0 border-r border-sidebar-border bg-sidebar">
          <div className="flex h-full min-h-0 flex-col items-stretch gap-1 py-2">
            <div className="px-2 pb-1">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground text-sm font-semibold">
                W
              </div>
            </div>

            <SideIconLink to="/home" label="Home">
              <LegacyIconHome className="h-6 w-6" />
            </SideIconLink>
            <SideIconLink to="/flow" label="Workflow">
              <LegacyIconFlow className="h-6 w-6" />
            </SideIconLink>
            <SideIconLink to="/matrix" label="Matrix">
              <LegacyIconMatrix className="h-6 w-6" />
            </SideIconLink>
            <SideIconLink to="/reports" label="Reports">
              <LegacyIconReports className="h-6 w-6" />
            </SideIconLink>

            <div className="flex-1" />

            <SideIconLink to="/settings" label="Settings">
              <LegacyIconSettings className="h-6 w-6" />
            </SideIconLink>
            <SideIconLink to="/support" label="Support">
              <LegacyIconSupport className="h-6 w-6" />
            </SideIconLink>
          </div>
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
            <div className="min-w-0 truncate text-sm">
              <span className="inline-flex items-center gap-2 font-semibold text-foreground">
                <HeroIcon className="h-4 w-4 text-muted-foreground" />
                {hero.title}
              </span>

              {hero.crumbs.length === 1 ? (
                <>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <span className="text-muted-foreground">{hero.crumbs[0]}</span>
                </>
              ) : null}

              {hero.crumbs.length >= 2 ? (
                <>
                  <span className="mx-2 text-muted-foreground">|</span>
                  <span className="text-muted-foreground">{hero.crumbs[0]}</span>
                  <span className="mx-2 text-muted-foreground">&gt;</span>
                  <span className="text-muted-foreground">{hero.crumbs[1]}</span>
                </>
              ) : null}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-accent"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
              </button>
              <div
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground"
                aria-label="User"
                title="User"
              >
                U
              </div>
            </div>
          </header>

          <main className="min-h-0 min-w-0 flex-1 overflow-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
