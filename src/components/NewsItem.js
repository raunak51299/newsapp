import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl} = this.props;
        return (
            // fix the card size and the image size 
            <div className="card text-white bg-dark" style={{width: '26rem', height: '30rem', overflow: 'hidden'}}>
                <img src={imgUrl===null ? "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" : imgUrl} className="card-img-top" alt="..." style={{height: '15rem'}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <small style={{color: 'rgb(143 191 157'}}>By {this.props.author ? this.props.author : "Unknown"} on {new Date(this.props.date).toGMTString()}</small>
                    <br></br>
                    <a href={newsUrl} target="_blank" rel="noreferrer"className="btn btn-primary my-3">Read More</a>
                </div>
            </div>
        )
    }
}