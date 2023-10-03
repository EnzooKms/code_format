/**
 * scroll fix ol about textArea
 * @param {HTMLTextAreaElement} textArea
 * @param {HTMLOListElement} ol
 */
const scrollFix = (ol, textArea, e) => {
  ol.scrollTop = textArea.scrollTop;
};

export { scrollFix };
