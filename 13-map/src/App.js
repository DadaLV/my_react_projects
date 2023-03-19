import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

const texts = [
  "Click me!",
  "Click me again!",
  "Click me one more time!",
  "Click me now!",
  "Hit me",
  "Press me"
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {/* <Button text={texts[0]} onClick={incrementCount} />
      <Button text={texts[1]} onClick={incrementCount} />
      <Button text={texts[2]} onClick={incrementCount} />
      <Button text={texts[3]} onClick={incrementCount} />
      <Button text={texts[4]} onClick={incrementCount} />
      <Button text={texts[5]} onClick={incrementCount} /> */}
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
    </div>
  );
}

export default App;
