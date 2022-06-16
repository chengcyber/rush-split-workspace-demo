if (typeof document !== 'undefined') {
  const $style = document.createElement("style");
  $style.textContent = `
body {
  background: aqua;
}
`;
  document.head.appendChild($style);
}
