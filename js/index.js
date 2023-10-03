import { init } from "./init.js";
import { createColor } from "./createColor.js";
import { surlineEvent } from "./surline.js";
import { scrollFix } from "./scrollFix.js";
import "../css/codeFormat.css";

const eventInput = () => {
  const ol = document.querySelector("#olCode");
  ol.innerHTML = "";
  const textArea = document.querySelector("#writtenCode");
  const lines = textArea.value.split("\n");
  createColor(lines);
};

init(eventInput, surlineEvent, scrollFix);
