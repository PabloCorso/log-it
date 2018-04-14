function createLogItemElement(logItem) {
  const container = createLogItemContainer(logItem);
  setLogItemContent(container, logItem);

  return container;
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

export { createLogItemElement };
