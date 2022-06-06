const body = document.querySelector("body");

const prototypeLoader = (type, delay = 500) => {
  if (type === "editor" || type === "editorx") {
    body.classList.add("frame-loading");
    body.insertAdjacentHTML(
      "afterbegin",
      `  <iframe class="loader-frame" src="https://wix-prototypers.github.io/prototypers_prototype-loader-preview/${type}-loader.html"></iframe>`
    );
  } else {
    body.classList.add("loading");
    body.insertAdjacentHTML("afterbegin", `<span class="loader"></span>`);
  }

  window.addEventListener("load", function () {
    setTimeout(() => {
      body.classList.remove("loading");
      body.classList.remove("frame-loading");
      document.querySelector(".loader")?.remove();
      document.querySelector(".loader-frame")?.remove();
      body.classList.add("loaded");
    }, delay);
  });
};
