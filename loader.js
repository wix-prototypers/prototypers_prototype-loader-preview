const prototypeLoader = (loader, delay = 2500) => {
  const body = document.querySelector("body");
  if (loader === "editor-loader") {
    body.insertAdjacentHTML(
      "afterbegin",
      `  <iframe class="loader-frame" src="https://wix-prototypers.github.io/prototypers_prototype-loader-preview/editor-loader.html" style="height: 102vh; top: -3px;"></iframe>`
    );
  } else if (loader === "editorx-loader") {
    body.insertAdjacentHTML(
      "afterbegin",
      `  <iframe class="loader-frame" src="https://wix-prototypers.github.io/prototypers_prototype-loader-preview//editorx-loader.html" style="height: 102vh; top: -3px;"></iframe>`
    );
  } else {
    body.classList.add("loading");
    body.insertAdjacentHTML("afterbegin", `<span class="loader"></span>`);
  }
  window.addEventListener("load", function () {
    setTimeout(() => {
      body.classList.remove("loading");
      document.querySelector(".loader")?.remove();
      document.querySelector(".loader-frame")?.remove();
      body.classList.add("loaded");
    }, delay);
  });
};
