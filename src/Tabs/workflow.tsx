import {
  Activity,
  Bot,
  CalendarClock,
  Monitor,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { WorkflowContent } from "../test/FrameStage0101";

/* ================= DATA ================= */

const startFromBlankCards = [
  {
    title: "Automated cloud flow",
    description: "Triggered by a designated event.",
    Icon: Bot,
  },
  {
    title: "Instant cloud flow",
    description: "Triggered manually as needed.",
    Icon: MousePointerClick,
  },
  {
    title: "Scheduled cloud flow",
    description: "You choose when and how often it runs.",
    Icon: CalendarClock,
  },
  {
    title: "Describe it to design it",
    description: "Describe the flow you want and AI builds it for you.",
    Icon: Sparkles,
  },
  {
    title: "Desktop flow",
    description: "Automates processes on your desktop environment.",
    Icon: Monitor,
  },
  {
    title: "Process mining",
    description: "Evaluate and optimize your existing processes and tasks.",
    Icon: Activity,
  },
] as const;

const currentWorkflow = {
  id: "RQT20261203-015",
  name: "TẠO YÊU CẦU TESTING NGUYÊN VẬT LIỆU",
  status: "In Progress",
} as const;

/* ================= PAGE ================= */

export default function WorkflowPage() {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full overflow-auto">
      {/* ✅ FULL WIDTH */}
      <div className="w-full px-6 lg:px-10 xl:px-14 py-6 space-y-6">

        {/* HEADER */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-lg font-semibold">
            Three ways to make a flow
          </h1>

          <fluent-button>Install</fluent-button>
        </div>

        {/* START FROM BLANK */}
        <section>
          <h2 className="text-sm font-semibold mb-3">
            Start from blank
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {startFromBlankCards.map(({ title, description, Icon }) => (
              <fluent-card
                key={title}
                className="block p-4 cursor-pointer transition hover:bg-[hsl(var(--accent)/0.1)]"
              >
                <div className="flex items-start gap-3">
                  
                  {/* ✅ FIX ICON */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>

                  <div>
                    <div className="text-sm font-semibold">
                      {title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {description}
                    </div>
                  </div>

                </div>
              </fluent-card>
            ))}
          </div>
        </section>

        {/* CURRENT WORKFLOW */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold">
            Workflow đang xử lý
          </h2>

          <fluent-card
            className="block p-4 cursor-pointer transition hover:bg-[hsl(var(--accent)/0.1)]"
            onClick={() =>
              navigate(`/flow/${encodeURIComponent(currentWorkflow.id)}`)
            }
          >
            <div className="flex items-center justify-between">
              
              <div>
                <div className="text-xs text-muted-foreground font-semibold">
                  {currentWorkflow.id}
                </div>
                <div className="text-sm font-semibold mt-1">
                  {currentWorkflow.name}
                </div>
              </div>

              <div className="flex items-center gap-3">
                
                {/* ✅ BADGE đẹp hơn */}
                <fluent-badge appearance="accent">
                  {currentWorkflow.status}
                </fluent-badge>

                <span className="text-muted-foreground text-sm">&gt;</span>
              </div>

            </div>
          </fluent-card>
        </section>

      </div>
    </div>
  );
}

/* ================= DETAIL ================= */

export function WorkflowDetailPage() {
  return (
    <div className="h-full w-full overflow-auto">
      <div className="w-full px-6 lg:px-10 xl:px-14 py-6">
        <fluent-card className="block p-4">
          <WorkflowContent />
        </fluent-card>
      </div>
    </div>
  );
}