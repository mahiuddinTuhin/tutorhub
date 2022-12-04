import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Red pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-red-500"
            checked
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Blue pill</span>
          <input
            type="radio"
            name="radio-10"
            className="radio checked:bg-blue-500"
            checked
          />
        </label>
      </div>
    </div>
  );
}

export default App;
