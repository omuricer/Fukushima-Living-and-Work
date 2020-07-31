import React from "react";
import { render } from "react-dom";

import Theme from "@/components/theme";
import App from "@/components/app";

import "@/css/destyle.css";
import "@/sass/index.scss";

const target = document.getElementById("app");
if (target) {
  render(
    <Theme>
      <App />
    </Theme>,
    target
  );
}
