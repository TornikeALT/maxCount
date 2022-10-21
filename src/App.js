import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);

  const increaseHandler = () => {
    if (time > 0) setCount(prev => prev + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else return;
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  const resetHandlder = () => {
    setCount(0);
    setTime(10);
  };

  return (
    <div className="App">
      <h1>No Clicks after time expires</h1>
      <h2>{count}</h2>
      <h2 className="timeleft">Times Left: {time}</h2>
      {time > 0 && (
        <button className="plusbtn" onClick={increaseHandler}>
          +
        </button>
      )}
      <button onClick={resetHandlder} className="resetbtn">
        Reset
      </button>
    </div>
  );
}

export default App;
