import React from "react";
import "./App.css";
import Counters from "./components/counters";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          // eslint-disable-next-line no-script-url
          href="JavaScript:void(0);"
          target="_blank"
          rel="noopener noreferrer"
        >
          Online Shopping
        </a>
        <button className="buy-btn btn-primary"> Pay Now </button>
      </header>
      <table className="tableid">
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
          <td>
            <Counters></Counters>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
