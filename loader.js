const onPrototypeReady = (src, delay = 500) => {
  const body = document.querySelector("body");
  if (src === "editor-loader") {
    body.insertAdjacentHTML(
      "afterbegin",
      `  <iframe class="loader-frame" src="loader-editor.html" style="height: 102vh; top: -3px;"></iframe>`
    );
  } else {
    body.classList.add("loading");
    body.insertAdjacentHTML("afterbegin", `<span class="loader"></span>`);
  }
  window.addEventListener("load", function () {
    setTimeout(() => {
      body.classList.remove("loading");
      body.querySelector(".loader-frame")?.remove();
      document.querySelector(".loader")?.remove();
      body.classList.add("loaded");
    }, delay);
  });
};
