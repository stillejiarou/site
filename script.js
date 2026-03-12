// BREADCRUMBS
(function () {
  const container = document.getElementById("breadcrumbs");
  if (!container) return;

  const path = window.location.pathname;

  const segments = path
    .split("/")
    .filter(s =>
      s.length > 0 &&
      s !== "pages" &&
      s !== "home" &&
      !s.startsWith("index")
    );

  let html = `<nav class="breadcrumbs">/ `;

  if (segments.length === 0) {
    container.innerHTML = html + `</nav>`;
    return;
  }

  const labels = segments.map(seg =>
    seg
      .replace(".html", "")
      .replace(/-/g, " ")
      .replace(/\b\w/g, c => c.toUpperCase())
  );

  html += labels
    .map((label, i) => {
      const isLast = i === labels.length - 1;

      if (isLast) {
        return `<span class="p-name">${label}</span>`;
      }

      const link = "/" + segments.slice(0, i + 1).join("/") + "/";
      return `<a class="u-url" href="${link}">${label}</a> / `;
    })
    .join("");

  html += `</nav>`;
  container.innerHTML = html;
})();

// CLICKABLES
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".clickable").forEach(article => {
    article.addEventListener("click", (e) => {
      if (e.target.tagName.toLowerCase() !== 'a') {
        window.location.href = article.dataset.url;
      }
    });
  });
});

// DEBUG
console.log("It works!");