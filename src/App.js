import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [update, setUpdate] = useState("");

  return (
    <div className="App">
      <br />
      <br />
      <br />

      <input
        type="number"
        name="username"
        value="jeetesh"
        placeholder="Enter Your Name "
        id="userId"
      />
      <br />
      <br />
      <br />
      <p>First React test Case</p>
      {/* <img
        title=" AI Generated Image"
        src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="hello"
      /> */}

      <input
        type="text"
        name=""
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit" onClick={() => setUpdate("Updated the data")}>
        Update
      </button>
      <h1>{update}</h1>
    </div>
  );
}

export default App;
