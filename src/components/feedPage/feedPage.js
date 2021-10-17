import React, { useState } from "react";
import NewsCatcher from "../newsCatcherAPI/newsCatcher";
import NewsAggregator from '../newsAggregator/newsAggregator';
import NewsSearcher from '../newsSearcher.js/newsSearcher';

const FeedPage = () => {
    const [news, setNews] = useState([]);
    const [firstLoad, setLoadCount] = useState(0);
    const [indexVariable, setIndex] = useState(0);

    const callApi = (values, lang) => {
        NewsCatcher(values, lang)
        .then(response => { 
            const linksResponse = [];
            const authorResponse = [];
            const mediaResponse = [];
            const completeResponse = [];

            console.log(response);

            for (let i = 0; i < 50; i++) {
                authorResponse.push(response.articles[i].author);
                linksResponse.push(response.articles[i].link);
                mediaResponse.push(response.articles[i].media);
            }

            completeResponse.push(authorResponse);
            completeResponse.push(linksResponse);
            completeResponse.push(mediaResponse);
            console.log(completeResponse)
            setNews(completeResponse);   
        }) 
    }

    if (firstLoad === 0) {
        // window.onload = callApi("technology", lang)
        alert("fistLoad")
        setLoadCount(1);
    }

    const addIndex = () => {
        setIndex(indexVariable + 10);
    }

    const subtractIndex = () => {
        setIndex(indexVariable - 10);
    }

    return (
        <>
            <NewsSearcher/>
            <NewsAggregator
                news={news}
                x={indexVariable}
                addIndex={addIndex}
                subtractIndex={subtractIndex}
            />
        </>
    )
}

export default FeedPage;