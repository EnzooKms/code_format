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
      if (word === "const") {
        p.classList.add("const");

        if (words[i + 1]) {
          const variable = createElement("p", words[i + 1]);
          variable.classList.add("varName");
          i++;
          append.push(variable);
        }
      } else if (word === "=" || word === "==" || word === "===") {
        p.classList.add("equals");
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
