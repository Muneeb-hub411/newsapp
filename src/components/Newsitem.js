import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, desc, imgurl, newsurl, author, date } = this.props;
    return (
      <div className="container ml-3">
        <div className="card ml-5" style={{ width: "18rem" }}>
          <img
            src={
              imgurl === null
                ? "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author === null ? "unknown" : author} Date:
                {date}
              </small>
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              className="btn btn-primary"
              target="_blank"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
