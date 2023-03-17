import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=66fb7f8e021b4ef4a3ae5371c2b78f4f";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }
    render() {
        return (
            <div className="container my-3">
                <h1>Top Headlines</h1>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem title={element.title != null ? element.title.slice(0, 45) : ""} description={element.description != null ? element.description.slice(0, 100) : element.title} newsUrl={element.url} imgUrl={element.urlToImage} />
                        </div>
                    })}

                </div>
            </div>
        )
    }
}
