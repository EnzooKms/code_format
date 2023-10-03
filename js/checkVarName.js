/**
 * check is the name of variable is valide
 * @param {String} name
 * @param {HTMLElement} element
 * @returns {boolean}
 */
const checkVarName = (name, element) => {
  if (name === "let") {
    element.classList.add("varNameError");
    return false;
  } else if (name === "const") {
    element.classList.add("varNameError");
    return false;
  } else {
    return true;
  }
};

export { checkVarName };
