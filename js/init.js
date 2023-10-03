const init = (inputEvent, surlineEvent, scrollFix) => {
  // pre is for no format text in html
  const pre = document.createElement("pre");
  pre.setAttribute("id", "precode");

  // ol for line
  const ol = document.createElement("ol");
  ol.setAttribute("id", "olCode");

  // text area for white code
  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "writtenCode");
  textArea.setAttribute("spellcheck", false);

  textArea.addEventListener("input", inputEvent);
  textArea.addEventListener("keyup", surlineEvent.bind(null, ol, textArea));
  textArea.addEventListener("click", surlineEvent.bind(null, ol, textArea));
  textArea.addEventListener("scroll", scrollFix.bind(null, ol, textArea));

  pre.appendChild(textArea);
  pre.appendChild(ol);
  document.body.appendChild(pre);

  inputEvent();
  surlineEvent(ol, textArea);
};

export { init };
