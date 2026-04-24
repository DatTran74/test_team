import { useEffect, useState, type ReactNode } from "react";

import { Bell, Menu, X } from "lucide-react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import svgPaths from "../test/svg-mi75i29jd8";

const BRAND_LOGO_PRIMARY = `${import.meta.env.BASE_URL}logoQV.png`;
const BRAND_LOGO_FALLBACK = `${import.meta.env.BASE_URL}logo.png`;

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
  onNavigate,
  children,
}: {
  to: string;
  label: string;
  onNavigate?: () => void;
  children: ReactNode;
}) {
  return (
    <NavLink
      to={to}
      onClick={onNavigate}
      aria-label={label}
      title={label}
      className={({ isActive }) =>
        [
          "relative mx-1 flex items-center justify-center rounded-md px-2 py-2 transition-colors",
          "hover:bg-sidebar-accent",
          isActive
            ? "bg-sidebar-accent/70 before:absolute before:left-0 before:top-1/2 before:h-7 before:w-0.5 before:-translate-y-1/2 before:rounded-r before:bg-sidebar-primary"
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

function SidebarRailContent({ onNavigate }: { onNavigate?: () => void }) {
  const [logoSrc, setLogoSrc] = useState(BRAND_LOGO_PRIMARY);
  const [showLogoFallbackText, setShowLogoFallbackText] = useState(false);

  return (
    <div className="flex h-full min-h-0 flex-col items-stretch gap-1 py-2">
      <div className="px-2 pb-2">
        <div className="flex h-11 w-14 items-center justify-center overflow-hidden rounded-xl border border-sidebar-border bg-sidebar-accent/70 shadow-sm">
          {showLogoFallbackText ? (
            <span className="text-sm font-semibold text-sidebar-primary">QV</span>
          ) : (
            <img
              src={logoSrc}
              alt="Quocviet Worrkflow Logo"
              className="h-9 w-12 object-contain"
              onError={() => {
                if (logoSrc !== BRAND_LOGO_FALLBACK) {
                  setLogoSrc(BRAND_LOGO_FALLBACK);
                  return;
                }
                setShowLogoFallbackText(true);
              }}
            />
          )}
        </div>
      </div>

      <SideIconLink to="/home" label="Home" onNavigate={onNavigate}>
        <LegacyIconHome className="h-6 w-6" />
      </SideIconLink>
      <SideIconLink to="/flow" label="Workflow" onNavigate={onNavigate}>
        <LegacyIconFlow className="h-6 w-6" />
      </SideIconLink>
      <SideIconLink to="/matrix" label="Matrix" onNavigate={onNavigate}>
        <LegacyIconMatrix className="h-6 w-6" />
      </SideIconLink>
      <SideIconLink to="/reports" label="Reports" onNavigate={onNavigate}>
        <LegacyIconReports className="h-6 w-6" />
      </SideIconLink>

      <div className="flex-1" />

      <SideIconLink to="/settings" label="Settings" onNavigate={onNavigate}>
        <LegacyIconSettings className="h-6 w-6" />
      </SideIconLink>
      <SideIconLink to="/support" label="Support" onNavigate={onNavigate}>
        <LegacyIconSupport className="h-6 w-6" />
      </SideIconLink>
    </div>
  );
}

export default function PlatformLayout() {
  const { pathname } = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

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
    <div className="relative h-full w-full overflow-hidden bg-background text-foreground">
      <div
        className={[
          "fixed inset-0 z-40 bg-black/45 transition-opacity duration-200 md:hidden",
          isMobileSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={() => setIsMobileSidebarOpen(false)}
        aria-hidden="true"
      />

      <aside
        id="mobile-sidebar"
        className={[
          "fixed inset-y-0 left-0 z-50 w-[50vw] min-w-[50vw] max-w-[50vw] border-r border-sidebar-border bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
        style={{ backgroundColor: "#f8fafc" }}
        aria-label="Mobile Sidebar"
      >
        <SidebarRailContent onNavigate={() => setIsMobileSidebarOpen(false)} />
      </aside>

      <div className="flex h-full min-h-0">
        {/* Teams-like left rail */}
        <aside className="relative z-10 hidden w-18 shrink-0 border-r border-sidebar-border bg-sidebar md:block">
          <SidebarRailContent />
        </aside>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <header className="flex h-14 items-center justify-between border-b border-border bg-background px-4">
            <div className="flex min-w-0 items-center gap-2 truncate text-sm">
              <button
                type="button"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-accent md:hidden"
                onClick={() => setIsMobileSidebarOpen((open) => !open)}
                aria-label={isMobileSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
                aria-expanded={isMobileSidebarOpen}
                aria-controls="mobile-sidebar"
              >
                {isMobileSidebarOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

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
