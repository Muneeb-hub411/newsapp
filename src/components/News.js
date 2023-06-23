import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class News extends Component {
  articles = [
    // {
    //   source: { id: "independent", name: "Independent" },
    //   author: "Lawrence Ostlere",
    //   title:
    //     "England vs Australia LIVE: Cricket scorecard and Ashes updates from the first Test at Edgbaston",
    //   description:
    //     "Who will draw first blood in the 2023 Ashes? Follow latest updates as England and Australia go head to head on day one at Edgbaston",
    //   url: "http://www.independent.co.uk/sport/cricket/ashes-score-live-england-australia-cricket-b2358752.html",
    //   urlToImage:
    //     "https://static.independent.co.uk/2023/06/16/08/CRICKET%20England%20%2008230791.jpg?quality=75&width=1200&auto=webp",
    //   publishedAt: "2023-06-16T08:32:58Z",
    //   content:
    //     "Pat Cummins backs David Warner against England as Australia turn down the volume\r\nPat Cummins is certain David Warner will turn up the aggression when batting during the Ashes but the Australia capta… [+1310 chars]",
    // },
    // {
    //   source: { id: "bbc-sport", name: "BBC Sport" },
    //   author: null,
    //   title: "'Bazball? Don't rate it' - Aussies preview the Ashes",
    //   description:
    //     "Australian podcasters The Grade Cricketer preview the 2023 men's Ashes series between England and Australia.",
    //   url: "http://www.bbc.co.uk/sport/av/cricket/65907094",
    //   urlToImage:
    //     "https://ichef.bbci.co.uk/news/1024/cpsprodpb/141F3/production/_130091428_p0fv4y99.jpg",
    //   publishedAt: "2023-06-16T08:07:21.6262687Z",
    //   content:
    //     "Up Next. 'Tall, argumentative, the future GOAT' - Stokes describes England team-mates. Video, 00:00:59'Tall, argumentative, the future GOAT' - Stokes describes England team-mates",
    // },
    // {
    //   source: { id: "bbc-sport", name: "BBC Sport" },
    //   author: null,
    //   title: "'Let the Ashes summer of love begin'",
    //   description:
    //     "On the eve of the Ashes, England and Australia are set to write the latest chapter in sport's greatest love story, says chief cricket writer Stephan Shemilt.",
    //   url: "http://www.bbc.co.uk/sport/cricket/65906469",
    //   urlToImage:
    //     "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17D0E/production/_130105579_ashespreviewv2.jpg",
    //   publishedAt: "2023-06-15T21:37:21.8202755Z",
    //   content:
    //     "<table><tr><th>Ashes 2023 - first Test</th></tr>\r\n<tr><td>Venue: Edgbaston Dates: 16-20 June</td></tr><tr><td>Coverage: Live text commentary and in-play video clips on the BBC Sport website &amp; app… [+7052 chars]",
    // },
    // {
    //   source: { id: "talksport", name: "TalkSport" },
    //   author: "Cameron Temple",
    //   title:
    //     "Australia players could only laugh abuse from ‘aggressive’ Edgbaston with Steve Smith and David Warner tar...",
    //   description:
    //     "With the Ashes being the biggest thing there is for Australian and English cricket fans, there can often be a lot of passion involved. And that was certainly the case at the 2019 series, especially…",
    //   url: "https://talksport.com/sport/cricket/1461594/australia-players-england-fans-edgbaston-steve-smith-david-warner/",
    //   urlToImage:
    //     "https://talksport.com/wp-content/uploads/sites/5/2023/06/Untitled-design-50.png?strip=all&quality=100&w=1500&h=1000&crop=1",
    //   publishedAt: "2023-06-15T09:02:07Z",
    //   content:
    //     "With the Ashes being the biggest thing there is for Australian and English cricket fans, there can often be a lot of passion involved. \r\nAnd that was certainly the case at the 2019 series, especially… [+1950 chars]",
    // },
    // {
    //   source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    //   author: null,
    //   title:
    //     "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
    //   description:
    //     "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
    //   url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
    //   publishedAt: "2020-04-27T11:41:47Z",
    //   content:
    //     "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    // },
    // {
    //   source: { id: "espn-cric-info", name: "ESPN Cric Info" },
    //   author: null,
    //   title:
    //     "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
    //   description:
    //     "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
    //   url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
    //   urlToImage:
    //     "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
    //   publishedAt: "2020-03-30T15:26:05Z",
    //   content:
    //     "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    // },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  Previousclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=143c6bad458b4494bd98ab7198fa2105&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=143c6bad458b4494bd98ab7198fa2105";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
  Nextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=143c6bad458b4494bd98ab7198fa2105&page=${
        this.state.page + 1
      }&pagesize=10`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container  my-5">
        <h2 className="text-center">News Buzz</h2>
        <div className="row justify-content-center ">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-2 my-2" key={element.url}>
                <Newsitem
                  title={element.title}
                  desc={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
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
          <button type="button" class="btn btn-dark" onClick={this.Nextclick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}