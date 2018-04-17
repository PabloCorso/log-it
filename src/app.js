import api from "./api/index.js";
import { LogItem, Spinner } from "./components/index.js";
const { bind, wire } = hyperHTML;

window.addEventListener("load", async event => {
  registerServiceWorker();
  initLogItems();
});

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./serviceWorker.js");
    });
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
