import api from "./api/index.js";
import { LogItem } from "./components/index.js";

const { bind, wire } = hyperHTML;
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
  const main = document.querySelector("main");
  bind(main)`${logItems.map(logItem => LogItem(logItem))}`;
}
