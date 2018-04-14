import { OneUp } from "./oneUp.js";
const { wire } = hyperHTML;

function LogItem({ id, name, image }) {
  const containerId = getContainerId(id);
  return wire({ id })`
			<div class=log-item id="${containerId}"
				onclick="${() => onClickLogItem(id)}">
				<span class=log-item-header>${name}</span>
				<img src="${image}"></img>
			</div>
		`;
}

function getContainerId(logItemId) {
  return "log-item-" + logItemId;
}

function onClickLogItem(logItemId) {
  showOneUpAnimation(logItemId);
}

function showOneUpAnimation(logItemId) {
  const container = getLogItemContainer(logItemId);
  container.appendChild(new OneUp());
}

function getLogItemContainer(logItemId) {
  var containerId = getContainerId(logItemId);
  return document.querySelector(`#${containerId}`);
}

export { LogItem };
