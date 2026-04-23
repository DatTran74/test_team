import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../Tabs/home";
import PlatformLayout from "../Tabs/platform-layout";
import Settings from "../Tabs/settings";
import WorkflowPage, { WorkflowDetailPage } from "../Tabs/workflow";
import Report from "../Tabs/report";

export default function TabRouter() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<PlatformLayout />}>
          <Route index element={<Navigate to="home" replace />} />

          <Route path="home" element={<Home />} />
          <Route path="flow" element={<WorkflowPage />} />
          <Route path="flow/:workflowId" element={<WorkflowDetailPage />} />
          <Route path="test" element={<Navigate to="flow" replace />} />

          <Route
            path="matrix"
            element={<div className="text-slate-600">Matrix (coming soon)</div>}
          />
          <Route
            path="reports"
            element={<Report />}
          />

          <Route path="settings" element={<Settings />} />
          <Route
            path="support"
            element={<div className="text-slate-600">Support (coming soon)</div>}
          />

          <Route path="*" element={<Navigate to="home" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
