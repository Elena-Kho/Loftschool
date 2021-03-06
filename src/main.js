import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/diagrams";
import "./scripts/reviews";
import "./scripts/portfolio";
import "./scripts/modal";
import "./scripts/menu";
