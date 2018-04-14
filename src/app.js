import api from "./api/index.js";

const logItems = api.getLogItems();

window.addEventListener("load", event => {
  registerServiceWorker();
  initLogItems();
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      navigator.serviceWorker.register("./serviceWorker.js");
      console.log("Service Worker registered");
    } catch (error) {
      console.log("Service worker registration failed");
    }
  }
}

function initLogItems() {
  logItems.forEach(initLogItem);
}

function initLogItem(logItem) {
  const container = createLogItemContainer(logItem);
  setLogItemContent(container, logItem);
  displayLogItem(container);
}

function createLogItemContainer(logItem) {
  const div = document.createElement("div");
  div.id = `log-item-${logItem.id}`;
  div.className = "log-item";
  div.addEventListener("click", event => {
    onClickItemContainer(div);
  });
  return div;
}

function setLogItemContent(container, logItem) {
  const header = document.createElement("span");
  header.innerText = logItem.name;
  header.className = "log-item-header";
  container.appendChild(header);

  const img = document.createElement("img");
  img.src = logItem.image;
  container.appendChild(img);
}

function displayLogItem(element) {
  const main = document.querySelector("main");
  main.appendChild(element);
}

function onClickItemContainer(container) {
  const oneUp = getOneUpElement();
  window.getComputedStyle(container);
  container.appendChild(oneUp);
}

function getOneUpElement() {
  const oneUp = document.createElement("span");
  oneUp.innerHTML = "+1";
  oneUp.className = "one-up";
  hideElementAfterAnimation(oneUp);
  return oneUp;
}

function hideElementAfterAnimation(element) {
  element.addEventListener(
    "webkitAnimationEnd",
    event => {
      element.style.display = "none";
    },
    false
  );
}
