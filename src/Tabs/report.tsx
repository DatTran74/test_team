import * as React from "react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Báo cáo tuần",
    status: "Hoàn thành",
    updated: "2 giờ trước",
  },
  {
    name: "Kế hoạch dự án",
    status: "Đang xử lý",
    updated: "Hôm qua",
  },
  {
    name: "Ghi chú cuộc họp",
    status: "Chưa bắt đầu",
    updated: "3 ngày trước",
  },
];

const pieData = [
  { name: "Hoàn thành", value: 16 },
  { name: "Đang xử lý", value: 8 },
];

const lineData = [
  { name: "T2", value: 2 },
  { name: "T3", value: 5 },
  { name: "T4", value: 3 },
  { name: "T5", value: 8 },
  { name: "T6", value: 6 },
];

const COLORS = ["#107C10", "#FFB900"];

export default function Report() {
  const [query, setQuery] = React.useState("");

  return (
    <div className="h-full w-full overflow-auto">
      <div className="mx-auto w-full max-w-5xl px-4 py-6">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Reports</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              Quản lý và theo dõi báo cáo
            </p>
          </div>

          <div className="flex gap-2">
            <fluent-button appearance="accent">Tạo mới</fluent-button>
            <fluent-button>Xuất file</fluent-button>
          </div>
        </div>

        <div className="mt-4 grid gap-4">

          {/* SEARCH */}
          <fluent-card className="block p-4">
            <div className="flex flex-col gap-3">
              <div className="text-sm font-medium">Tìm kiếm</div>

              <fluent-search
                placeholder="Tìm báo cáo..."
                value={query}
                onInput={(e) =>
                  setQuery(
                    ((e.target as any).value ?? "").toString()
                  )
                }
              />
            </div>
          </fluent-card>

          {/* STATS */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <fluent-card className="block p-4">
              <div className="text-sm font-medium">Tổng báo cáo</div>
              <div className="text-2xl font-semibold mt-1">24</div>
            </fluent-card>

            <fluent-card className="block p-4">
              <div className="text-sm font-medium">Đang xử lý</div>
              <div className="text-2xl font-semibold mt-1">8</div>
            </fluent-card>

            <fluent-card className="block p-4">
              <div className="text-sm font-medium">Hoàn thành</div>
              <div className="text-2xl font-semibold mt-1">16</div>
            </fluent-card>
          </div>

          {/* CHARTS */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

            {/* PIE */}
            <fluent-card className="block p-4">
              <div className="text-sm font-medium mb-3">Trạng thái</div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" outerRadius={80}>
                      {pieData.map((_, i) => (
                        <Cell key={i} fill={COLORS[i]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </fluent-card>

            {/* LINE */}
            <fluent-card className="block p-4">
              <div className="text-sm font-medium mb-3">Hoạt động tuần</div>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0F6CBD"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </fluent-card>

          </div>

          {/* TABLE */}
          <fluent-card className="block p-4">
            <div className="text-sm font-medium mb-3">
              Danh sách báo cáo
            </div>

            {data.map((item, idx) => (
              <div key={idx} className="py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.updated}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <fluent-badge appearance="accent">
                      {item.status}
                    </fluent-badge>

                    <fluent-button>Open</fluent-button>
                  </div>
                </div>

                {idx < data.length - 1 && (
                  <fluent-divider className="mt-3" />
                )}
              </div>
            ))}
          </fluent-card>

        </div>
      </div>
    </div>
  );
}