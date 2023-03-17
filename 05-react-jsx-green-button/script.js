const App = (props) => {
  const { initialButtonText, initialButtonStyle } = props
  const [buttonText, setButtonText] = React.useState(initialButtonText)
  const [buttonStyle, setButtonstyle] = React.useState(initialButtonStyle)
  
  const onButtonClick = () => {
    setButtonText("Hello from React")
    setButtonstyle("green-btn")
  };
  return (
    <div className="app">
      <button className={buttonStyle} onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Cick me" initialButtonStyle="" />);
