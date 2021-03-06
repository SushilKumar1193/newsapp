import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,date,source} = this.props;
    return (
      <div>
        <div className="card">
          <div style={{display: "flex",justifyContent:"flex-end",position:"absolute",right:0}}>
        <span className=" badge rounded-pill bg-danger">
    {source}
  </span>
  </div>
          <img src={!imageUrl?"https://bsmedia.business-standard.com/_media/bs/img/article/2021-05/14/full/1620963347-5688.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div className="card-footer">
      <small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
    </div>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
