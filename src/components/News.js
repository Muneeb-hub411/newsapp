import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: "in",
    pagesize: 5,
    category: "general",
  };
  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  Previousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=143c6bad458b4494bd98ab7198fa2105&page=${
      this.state.page - 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=143c6bad458b4494bd98ab7198fa2105&pagesize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  Nextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=143c6bad458b4494bd98ab7198fa2105&page=${
        this.state.page + 1
      }&pagesize=${this.props.pagesize}`;
      this.setState({
        loading: true,
      });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        loading: false,
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container  my-5">
        <h2 className="text-center">News Buzz</h2>
        {this.state.loading === true && <Spinner />}
        <div className="row justify-content-center ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-2 my-2" key={element.url}>
                <Newsitem
                  title={element.title}
                  desc={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.Previousclick}
            disabled={this.state.page <= 1}
          >
            Previous &larr;
          </button>
          <button
            type="button"
            class="btn btn-dark"
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            onClick={this.Nextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
