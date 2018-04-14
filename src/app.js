import api from "./api/index.js";
import { createLogItemElement } from "./components/index.js";

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
  const element = createLogItemElement(logItem);
  displayLogItem(element);
}

function displayLogItem(element) {
  const main = document.querySelector("main");
  main.appendChild(element);
}
