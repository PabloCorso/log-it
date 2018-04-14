const { wire } = hyperHTML;

function OneUp() {
  var oneUp = wire()`
		<span class=one-up>+1</span>
	`;
  removeElementAfterAnimation(oneUp);
  return oneUp;
}

function removeElementAfterAnimation(element) {
  element.addEventListener(
    "webkitAnimationEnd",
    event => {
      element.parentNode.removeChild(element);
    },
    false
  );
}

export { OneUp };
