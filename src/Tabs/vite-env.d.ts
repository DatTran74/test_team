/// <reference types="vite/client" />

import type * as React from "react";

// TS + React (react-jsx) sometimes reads IntrinsicElements from the `react` module
// namespace rather than the global `JSX` namespace, so we augment both.

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-checkbox": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        checked?: boolean;
      };
      "fluent-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "fluent-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
        disabled?: boolean;
      };
      "fluent-search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        placeholder?: string;
        value?: string;
        disabled?: boolean;
      };
      "fluent-badge": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
      };
      "fluent-divider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "fluent-checkbox": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        checked?: boolean;
      };
      "fluent-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      "fluent-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
        disabled?: boolean;
      };
      "fluent-search": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        placeholder?: string;
        value?: string;
        disabled?: boolean;
      };
      "fluent-badge": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        appearance?: string;
      };
      "fluent-divider": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
