import React, { Component } from "react";
import Loading from "../components/Loding.gif";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img
          src={Loading}
          alt=""
          height="22px"
          className="rounded mx-auto d-block"
        />
      </div>
    );
  }
}

export default Spinner;
