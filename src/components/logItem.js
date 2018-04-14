const { wire } = hyperHTML;

function LogItem(logItem) {
  const containerId = getContainerId(logItem.id);
  return wire(logItem)`
			<div class=log-item id="${containerId}"
				onclick="${() => onClickLogItem(logItem.id)}">
				<span class=log-item-header>${logItem.name}</span>
				<img src="${logItem.image}"></img>
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
  const oneUp = getOneUpElement();
  container.appendChild(oneUp);
}

function getLogItemContainer(logItemId) {
  var containerId = getContainerId(logItemId);
  return document.querySelector(`#${containerId}`);
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

export { LogItem };
