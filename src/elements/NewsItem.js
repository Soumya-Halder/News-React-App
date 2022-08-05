import React from 'react'

const NewsItem = (props) => {
    
    let { title, description, imageUrl, newsUrl, author, data, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{
                    display: "flex",
                    position: "absolute",
                    right: "0"
                }}>
                    <span className=" badge rounded-pill bg-danger"> {source} </span>
                </div>

                <img src={!imageUrl ? "https://shiftdelete.net/wp-content/uploads/2021/08/dunya-neden-elon-musk-i-bir-dahi-olarak-goruyor1.jpg" : imageUrl} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(data).toGMTString()} </small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
    
}

export default NewsItem
