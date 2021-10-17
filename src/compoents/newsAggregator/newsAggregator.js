import React from "react";

const NewsAggregator = ({ news, x, addIndex , subtractIndex }) => {
    if (news.length === 0) {
        return <h1>{news}</h1>;
    }

    if (x/10+1 === 1) {
        return (
            <div>
                <div>
                    <p>test, {news[0][0+x]}</p>
                    <p>teeest, {news[1][0+x]}</p>
                </div>
                <div>
                    <p>test, {news[0][1+x]}</p>
                    <p>teeest, {news[1][1+x]}</p>
                </div>

                <div>
                    <button 
                        onClick={subtractIndex}
                        disabled>
                        hey
                    </button>
                    <p>{x/10+1}</p>
                    <button 
                        onClick={addIndex}
                        >
                        hey
                    </button>
                </div>
            </div>
        );
    } else if (x/10+1 === 5) {
        return (
            <div>
                <div>
                    <p>test, {news[0][0+x]}</p>
                    <p>teeest, {news[1][0+x]}</p>
                </div>
                <div>
                    <p>test, {news[0][1+x]}</p>
                    <p>teeest, {news[1][1+x]}</p>
                </div>

                <div>
                    <button 
                        onClick={subtractIndex}>
                        hey
                    </button>
                    <p>{x/10+1}</p>
                    <button 
                        onClick={addIndex}
                        disabled>
                        hey
                    </button>
                </div>
            </div>
        );
    } else if (x/10+1 !== 1 && x/10+1 !== 5) {
        return (
            <div>
                <div>
                    <p>test, {news[0][0+x]}</p>
                    <p>teeest, {news[1][0+x]}</p>
                </div>
                <div>
                    <p>test, {news[0][1+x]}</p>
                    <p>teeest, {news[1][1+x]}</p>
                </div>

                <div>
                    <button 
                        onClick={subtractIndex}>
                        hey
                    </button>
                    <p>{x/10+1}</p>
                    <button 
                        onClick={addIndex}>
                        hey
                    </button>
                </div>
            </div>
        );
    }
};

export default NewsAggregator;