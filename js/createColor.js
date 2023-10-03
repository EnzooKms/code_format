import { checkVarName } from "./checkVarName.js";

/**
 *
 * @param {keyof ElementTagNameMap} type
 * @param {string} word
 * @returns {HTMLElement}
 */
const createElement = (type, word) => {
  const element = document.createElement(type);
  element.innerText = word;
  return element;
};

const createColor = (lines) => {
  for (const line of lines) {
    const words = line.split(" ");

    const span = document.createElement("span");
    const ol = document.querySelector("#olCode");
    const number = ol.children.length + 1;
    const li = document.createElement("li");
    li.setAttribute("data-number", `${number}.`);

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const p = createElement("p", word);
      let append = [p];

      /** const value */
      if (word === "const") {
        p.classList.add("const");

        if (words[i + 1]) {
          const variable = createElement("p", words[i + 1]);
          variable.classList.add("varName");
          i++;

          checkVarName(words[i], variable);
          append.push(variable);
        }
      } else if (word === "let") {
        /** let value */
        p.classList.add("let");

        if (words[i + 1]) {
          const variable = createElement("p", words[i + 1]);
          variable.classList.add("varName");
          i++;

          checkVarName(words[i], variable);
          append.push(variable);
        }
      } else if (word === "=" || word === "==" || word === "===") {
        /** = or == or === value */
        p.classList.add("equals");
      } else if (word === "true" || word === "false" || word === "true;" || word === "false;") {
        /** boolean value */
        p.classList.add("boolean");
        p.innerText = word.startsWith("true") ? "true" : "false";

        /** commat with boolean */
        if (word.endsWith(";")) {
          p.classList.add("noMargin");
          const commat = createElement("p", ";");
          commat.classList.add("dotCommat");
          append.push(commat);
        }
      } else if (!isNaN(word) || (!isNaN(word.slice(0, -1)) && word.endsWith(";"))) {
        p.classList.add("number");
        p.innerText = !isNaN(word) ? word : word.slice(0, -1);

        if (!isNaN(word.slice(0, -1)) && word.endsWith(";")) {
          p.classList.add("noMargin");
          const commat = createElement("p", ";");
          commat.classList.add("dotCommat");
          append.push(commat);
        }
      }

      for (const element of append) {
        span.appendChild(element);
      }
    }

    li.appendChild(span);
    ol.appendChild(li);
  }
};

export { createColor };
