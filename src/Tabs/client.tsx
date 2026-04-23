import { createRoot } from "react-dom/client";

import {
  fluentBadge,
  fluentButton,
  fluentCard,
  fluentCheckbox,
  fluentDivider,
  fluentSearch,
  provideFluentDesignSystem,
} from "@fluentui/web-components";

import App from "./App";

provideFluentDesignSystem().register(
  fluentCheckbox(),
  fluentCard(),
  fluentButton(),
  fluentSearch(),
  fluentBadge(),
  fluentDivider()
);

createRoot(document.getElementById("root")!).render(
  <App />
);
