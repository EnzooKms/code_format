/**
 * this function will set an another background of the line is focus
 * @param {HTMLOListElement} ol
 * @param {Event} e
 */
const surlineEvent = (ol, textArea, e) => {
  const index = textArea.value.substr(0, textArea.selectionStart).split("\n").length - 1;
  const li = ol.children[index];
  const liActive = document.querySelector(".active span");
  liActive?.classList.remove("active");
  li.children[0].classList.add("active");
};

export { surlineEvent };
