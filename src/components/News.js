import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    //document.title = `NewsMonkey - ${props.category[0].toUpperCase() + props.category.slice(1)}`;


    const componentDidMount = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        props.setProgress(10);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }


    // handlePrev = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     this.setState({ loading: true })
    //     let parsedData = await data.json();

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    // }
    // handleNext = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json();

    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false,
    //         })
    //     }
    // }

    const fetchMoreData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        componentDidMount();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="my-3 mx-5">
            <h1 style={{ color: 'white', marginTop: '60px' }}>Top Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {!loading && articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title != null ? element.title.slice(0, 45) : ""} description={element.description != null ? element.description.slice(0, 100) : element.title} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} />
                                {/* <NewsItem title={element.title} description={element.description} newsUrl={element.url} imgUrl={element.urlToImage} author={element.author} date={element.publishedAt} /> */}
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>

        </div>
    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    catefgory: PropTypes.string,
}

export default News