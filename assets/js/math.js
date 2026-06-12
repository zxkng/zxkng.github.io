/* Math rendering with KaTeX.
 *
 * Two sources of math are handled:
 *   1. kramdown turns $$...$$ into <script type="math/tex"> tags — render those.
 *   2. Raw $...$, \(...\), \[...\] left in the text — render with auto-render.
 *
 * Scripts load with `defer`, so KaTeX globals are ready by DOMContentLoaded.
 */
document.addEventListener("DOMContentLoaded", function () {
  if (typeof katex !== "undefined") {
    // (1) kramdown-generated <script type="math/tex"> tags
    var scripts = document.querySelectorAll('script[type^="math/tex"]');
    scripts.forEach(function (el) {
      var display = el.type.indexOf("mode=display") !== -1;
      var tex = el.textContent;
      var holder = document.createElement(display ? "div" : "span");
      if (display) holder.className = "katex-display-wrap";
      try {
        katex.render(tex, holder, { displayMode: display, throwOnError: false });
      } catch (e) {
        holder.textContent = (display ? "$$" : "$") + tex + (display ? "$$" : "$");
      }
      el.parentNode.replaceChild(holder, el);
    });
  }

  // (2) raw delimiters left in body text
  if (typeof renderMathInElement !== "undefined") {
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      throwOnError: false
    });
  }
});
