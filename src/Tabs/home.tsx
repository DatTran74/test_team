import * as React from "react";

const quickActions = [
  { title: "Tạo mới", description: "Bắt đầu nhanh một tác vụ", cta: "Tạo", badge: "NEW" },
  { title: "Gần đây", description: "Mở lại những mục vừa dùng", cta: "Xem", badge: "" },
  { title: "Cài đặt", description: "Tuỳ biến trải nghiệm", cta: "Mở", badge: "" },
] as const;

const recentItems = [
  { title: "Báo cáo tuần", meta: "Cập nhật 2 giờ trước" },
  { title: "Kế hoạch dự án", meta: "Cập nhật hôm qua" },
  { title: "Ghi chú cuộc họp", meta: "Cập nhật 3 ngày trước" },
] as const;

export default function Home() {
  const [query, setQuery] = React.useState("");
  const indeterminateRef = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = indeterminateRef.current as (HTMLElement & { indeterminate?: boolean }) | null;
    if (el) el.indeterminate = true;
  }, []);

  return (
    <div className="h-full w-full overflow-auto">
      <div className="mx-auto w-full max-w-5xl px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Home</h1>
            <p className="text-muted-foreground mt-1 text-sm">Giao diện kiểu Microsoft (Fluent)</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <fluent-button appearance="accent">Tạo mới</fluent-button>
            <fluent-button>Thêm</fluent-button>
          </div>
        </div>

        <div className="mt-4 grid gap-4">
          <fluent-card className="block p-4">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-foreground">Tìm kiếm</div>
                <fluent-badge appearance="outline">BETA</fluent-badge>
              </div>

              <fluent-search
                className="w-full"
                placeholder="Tìm trong ứng dụng…"
                value={query}
                onInput={(e) => setQuery(((e.target as unknown as { value?: string }).value ?? "").toString())}
              />

              <div className="text-muted-foreground text-xs">
                {query ? (
                  <span>
                    Từ khoá: <span className="text-foreground font-medium">{query}</span>
                  </span>
                ) : (
                  <span>Gợi ý: thử nhập “báo cáo”, “dự án”, “họp”…</span>
                )}
              </div>
            </div>
          </fluent-card>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {quickActions.map((a) => (
              <fluent-card key={a.title} className="block p-4">
                <div className="flex h-full flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-foreground text-sm font-semibold">{a.title}</div>
                      <div className="text-muted-foreground mt-1 text-xs">{a.description}</div>
                    </div>
                    {a.badge ? <fluent-badge>{a.badge}</fluent-badge> : null}
                  </div>

                  <div className="mt-auto">
                    <fluent-button>{a.cta}</fluent-button>
                  </div>
                </div>
              </fluent-card>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <fluent-card className="block p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-foreground">Gần đây</div>
                <fluent-button>Hiển thị tất cả</fluent-button>
              </div>

              <div className="mt-3">
                {recentItems.map((item, idx) => (
                  <div key={item.title} className="py-2">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-foreground text-sm font-medium">{item.title}</div>
                        <div className="text-muted-foreground mt-0.5 text-xs">{item.meta}</div>
                      </div>
                      <fluent-button>Open</fluent-button>
                    </div>
                    {idx < recentItems.length - 1 ? <fluent-divider className="mt-3" /> : null}
                  </div>
                ))}
              </div>
            </fluent-card>

            <fluent-card className="block p-4">
              <div className="text-sm font-medium text-foreground">Cài đặt nhanh</div>
              <p className="text-muted-foreground mt-1 text-xs">Ví dụ các control Fluent đang dùng trong Home.</p>

              <div className="mt-3 space-y-2">
                <fluent-checkbox>Thông báo</fluent-checkbox>
                <fluent-checkbox checked>Tự động lưu</fluent-checkbox>
                <fluent-checkbox ref={indeterminateRef}>Đồng bộ</fluent-checkbox>
              </div>
            </fluent-card>
          </div>
        </div>
      </div>
    </div>
  );
}
