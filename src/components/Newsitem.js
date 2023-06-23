import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, desc, imgurl, newsurl } = this.props;
    return (
      <div className="container ml-3">
        <div className="card ml-5" style={{ width: "18rem" }}>
          <img src={imgurl} className="card-img-top" alt="..." />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <a href={newsurl} className="btn btn-primary" target="_blank">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
