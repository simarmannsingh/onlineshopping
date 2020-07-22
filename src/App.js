import React from "react";
import "./App.css";
import Counters from "./components/counters";
import Pageheader from "./components/pageheader";

function App() {
  return (
    <div className="App">
      <Pageheader></Pageheader>

      <p className="special-font">
        *This is a Demo app. Please don't expect a BMW performance from a toy
        car.
      </p>
      <table className="tableid">
        <tr>
          <td>
            <Counters
              item="White T-shirt"
              price="19.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Brown T-shirt"
              price="19.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Black T-shirt"
              price="19.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Grey T-shirt"
              price="19.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters
              item="Blue Jeans"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Black Jeans"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Brown Jeans"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Purple Jeans"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters
              item="Deutsche Flag"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Indian Flag"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Russian Flag"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="French Flag"
              price="29.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters
              item="Dell Laptop"
              price="649.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Apple Laptop"
              price="2899.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Microsoft Laptop"
              price="999.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="HP Laptop"
              price="1129.99"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters
              item="HP Headphones"
              price="200"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Skullcandy"
              price="225"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Bose"
              price="400"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Sony"
              price="566"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
        <tr>
          <td>
            <Counters
              item="Dell Tablet"
              price="499"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Apple iPad"
              price="[free] 0"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Surface Pro"
              price="1299"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
          <td>
            <Counters
              item="Samsung Tablet"
              price="566"
              imglink="https://picsum.photos/100"
            ></Counters>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
