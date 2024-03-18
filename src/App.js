import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);

  const [count, setCount] = useState(0);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div>
        <input
          type="range"
          min="0"
          max="100"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Step:{step}</span>
        {/* <button onClick={() => setStep((s) => s - 1)}> - </button>
        
        <button onClick={() => setStep((s) => s + 1)}> + </button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Rest</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
