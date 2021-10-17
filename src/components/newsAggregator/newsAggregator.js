import React from "react";
import IndexButton from "../indexButton/indexButton";

const NewsAggregator = ({ news, x, addIndex , subtractIndex }) => {
    if (news.length === 0) {
        return <h1>{news}</h1>;
    }
        return (
            <>
                <div>
                    <p>test, {news[0][0+x]}</p>
                    <p>teeest, {news[1][0+x]}</p>
                </div>
                <div>
                    <p>test, {news[0][1+x]}</p>
                    <p>teeest, {news[1][1+x]}</p>
                </div>
                <IndexButton 
                    x={x}
                    addIndex={addIndex}
                    subtractIndex={subtractIndex}
                />
            </>
        );
};

export default NewsAggregator;