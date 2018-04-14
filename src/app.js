import api from "./api/index.js";
import { LogItem, Spinner } from "./components/index.js";
const { bind, wire } = hyperHTML;

window.addEventListener("load", async event => {
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
  bind(main)`${{
    any: api
      .getLogItems()
      .then(logItems => logItems.map(logItem => new LogItem(logItem))),
    placeholder: new Spinner()
  }}`;
}
