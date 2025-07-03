function clamp(el, lines = 2) {
  const style = getComputedStyle(el);
  const maxH = parseFloat(style.lineHeight) * lines;
  el.style.maxHeight = `${maxH}px`;
  el.style.overflow = "hidden";
  let txt = el.textContent.trim() + "…";

  // Укорачиваем по слову, пока не влезет
  while (el.scrollHeight > maxH) {
    txt = txt.replace(/\s+\S+…$/, "…");
    el.textContent = txt;
  }
}

// Применение:
document.querySelectorAll(".clamped-text").forEach((el) => clamp(el, 2));
