const { wire } = hyperHTML;

function Spinner() {
  const imgStyle = {
    width: 50,
    height: 50,
    animation: "spin 2s linear infinite"
  };
  const containerStyle = {
    textAlign: "center",
    marginTop: 40
  };

  return wire()`
		<div style="${containerStyle}">
			<img style="${imgStyle}" src="./images/spinner.svg" />
		</div>
	`;
}

export { Spinner };
