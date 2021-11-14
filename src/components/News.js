import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  articles = [
    {
      source: { id: "fox-sports", name: "Fox Sports" },
      author: "FOX Sports",
      title:
        "RJ Young: CFP committee doesn't care about the results of football games",
      description:
        "The latest CFP rankings showed that the committee doesn't care about winning, losing or head-to-head, RJ Young writes.",
      url: "http://www.foxsports.com/stories/college-football/rj-young-cfp-committee-doesnt-care-about-the-results-of-football-games",
      urlToImage:
        "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2021/11/1408/814/11.09.21_RJ-Youngs-CFP-reax_16x9.jpg?ve=1&tl=1",
      publishedAt: "2021-11-10T04:46:06Z",
      content:
        "By RJ YoungFOX Sports College Football Writer\r\nThe College Football Playoff selection committee doesnt care about winning football games. Thats what the Week 11 CFP rankings demonstrated once again.\r… [+3698 chars]",
    },
    {
      source: { id: "bleacher-report", name: "Bleacher Report" },
      author: "Kerry Miller",
      title:
        "College Football Playoff Projections: Week 11 Rankings and Bowl Forecast",
      description:
        "Tucked in between a pair of college basketball games, we got a new batch of College Football Playoff rankings on Tuesday night, and the new Top Four is Georgia, Alabama, Oregon and Ohio State, in that order...",
      url: "https://bleacherreport.com/articles/2950223-college-football-playoff-projections-week-11-rankings-and-bowl-forecast",
      urlToImage:
        "https://img.bleacherreport.net/img/slides/photos/004/485/611/9c333ff3aa7444be176519b3931298f0_crop_exact.jpg?w=1200&h=1200&q=75",
      publishedAt: "2021-11-10T02:48:29Z",
      content:
        "North Carolina's Sam HowellGerry Broome/Associated Press\r\nHere is the breakdown of bowl projections listed alphabetically by conference. New Year's Six games have been italicized and underlined to he… [+2296 chars]",
    },
    {
      source: { id: "espn", name: "ESPN" },
      author: "Mark Schlabach",
      title:
        "Ohio State slides into College Football Playoff's top four, joining Georgia, Alabama and Oregon",
      description:
        "After a ho-hum victory over Nebraska on the road last week, coach Ryan Day and Ohio State find themselves in the College Football Playoff's fourth spot this week, behind the mainstays from Week 1, Georgia, Alabama and Oregon.",
      url: "http://espn.go.com/college-football/story/_/id/32594054/ohio-state-slides-college-football-playoff-top-four-joining-georgia-alabama-oregon",
      urlToImage:
        "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1110%2Fr935337_1296x729_16%2D9.jpg",
      publishedAt: "2021-11-10T02:10:00Z",
      content:
        "What happens when every College Football Playoff contender except the No. 1 team struggles on the first Saturday of November?Not a whole lot when it comes to the CFP selection committee rankings.The … [+3318 chars]",
    },
    {
      source: { id: "nfl-news", name: "NFL News" },
      author: null,
      title: "NFL roundup: Latest league news from Tuesday, Nov. 9",
      description:
        "The Dolphins have a short week to prepare for the Ravens. They're hoping it will be enough time for ﻿Tua Tagovailoa﻿ to make his next start. Coach Brian Flores said the second-year QB's availability for Thursday Night Football will be a game-time decision",
      url: "https://www.nfl.com/news/nfl-roundup-latest-league-news-from-tuesday-nov-9",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/ihoeohl5wxaudtd7doik",
      publishedAt: "2021-11-09T21:22:42.5348566Z",
      content:
        "The Miami Dolphins have a short week to prepare for the Baltimore Ravens. They're hoping it will be enough time for Tua Tagovailoa to make his next start.\r\nCoach Brian Flores said the second-year qua… [+1198 chars]",
    },
    {
      source: { id: "four-four-two", name: "FourFourTwo" },
      author: "FourFourTwo Staff",
      title:
        "Arsenal legend reportedly turns down a chance to join the Newcastle United revolution",
      description:
        "Ajax's director of football and former Arsenal star Marc Overmars is not swayed by the Magpie millions",
      url: "https://www.fourfourtwo.com/news/newcastle-united-arsenal-legend-reportedly-turns-down-a-chance-to-join-magpies-marc-overmars-nufc-afc",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/aFXaDZXkJVeBJrjrSnYBVS-1200-80.jpg",
      publishedAt: "2021-11-09T17:45:14Z",
      content:
        "Marc Overmars, once of Arsenal and Barcelona, has apparently turned down advances to join Newcastle United's new set-up.\r\nThe Dutchman now works as Director of Football for Ajax, where he has been fo… [+1841 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      description:
        "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      urlToImage:
        "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      publishedAt: "2020-04-27T07:20:43Z",
      content:
        "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]",
    },
  ];

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalize(this.props.category)} - News Monk`;
  }
  async componentDidMount() {
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c145b33c6b744f48cf53c3b210166bb&page=${this.state.page}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true})

    // let data =await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({loading :false,articles: parsedData.articles, totalResults: parsedData.totalResults,})
    this.updateNews();
  }

  async updateNews() {
    this.props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c145b33c6b744f48cf53c3b210166bb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.props.setProgress(30);
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);

    console.log(parsedData);
    this.setState({
      loading: false,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });

    this.props.setProgress(100);
  }
  previousClick = async () => {
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c145b33c6b744f48cf53c3b210166bb&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    // this.setState({loading: true})

    // let data =await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData)
    // this.setState({articles: parsedData.articles})

    // this.setState({
    //   loading: false,
    //   page: this.state.page-1,
    //   articles: parsedData.articles
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  nextClick = async () => {
    //   if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    //   let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c145b33c6b744f48cf53c3b210166bb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    //   this.setState({loading: true})
    //   let data =await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     loading: false,
    //     articles: parsedData.articles,
    //     page: this.state.page+1
    //   })

    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  
  fetchMoreData = async() => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5c145b33c6b744f48cf53c3b210166bb&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    this.setState({
      page: this.state.page+1
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      // loading: false,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
      {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{marginTop:'54px'}}>
          News Monk - Top {this.capitalize(this.props.category)} Headlines{" "}
        </h1>
        {this.state.loading &&<Spinners/ >}        

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinners/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.previousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            className="btn btn-dark"
            onClick={this.nextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
  }
}
export default News;
