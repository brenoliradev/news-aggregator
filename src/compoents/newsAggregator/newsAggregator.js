import React, {useState} from "react";
import NewsCatcher from "../newsCatcherAPI/newsCatcher";
import FeedPage from "../feedPage/feedPage";

const NewsAggregator = ({ news }) => {
    return news.map((newsInfo, index) => (
        <div
          key={index}
        >
            <p>test, {newsInfo}</p>
        </div>
    ));
};

export default NewsAggregator;