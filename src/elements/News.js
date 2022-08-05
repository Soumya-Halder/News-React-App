import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spnner from './Spnner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>  {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `${props.category} - FaraNews `

    const  upDateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0757e42551f046fda564e9ec0e4e1e84&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parseData = await data.json();
        props.setProgress(50);
        setArticles(parseData.articles)
        setLoading(false)
        setTotalResults(parseData.totalResults)
        props.setProgress(100);
    }

    useEffect(() => {
        upDateNews();
        
    },[])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0757e42551f046fda564e9ec0e4e1e84&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResults(parseData.totalResults)
        
    };

    
    return (
        <>
            <h1 className="text-center mt-5" style={{marginTop:"50px"}}>iNews - Top Headlines</h1>

            {loading && <Spnner/>}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spnner/>}>
                
                <div className="container my-4">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} data={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            

        </ >
    )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 7,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
