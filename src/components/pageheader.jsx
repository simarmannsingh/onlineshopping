import React, { Component } from "react";
import brandlogo from "../img/brandlogo.png";
import "../App.css";

class Pageheader extends Component {
  render() {
    return (
      <div className="App-header">
        <img
          src={brandlogo}
          className="App-link brandlogo"
          // eslint-disable-next-line no-script-url
          href="#"
          alt="Online Shopping Brand Logo"
        />
        <input
          type="text"
          id="searchbar"
          placeholder="Search..."
          className="form-control w-50 searchBar"
        ></input>
        <button className="buy-btn btn-primary"> Pay Now </button>
      </div>
    );
  }

  search() {
    //$("#searchbar").on("keyup", () => {
    //let searchterm = $(this).val().toLowerCase();
    //});
  }
}

export default Pageheader;
