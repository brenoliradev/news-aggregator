import React from "react";
import IndexButton from "../indexButton/indexButton";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import './newsAggregator.scss';

const NewsAggregator = ({ news, indexVariable, addIndex , subtractIndex }) => {
    if (news.length === 0) {
        return <h1>{news}</h1>;
    }

    const buttons = [
        <Button 
            key="1" 
            href={news[1][0+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][0+indexVariable]}
        </Button>, 
        <Button 
            key="2"
            href={news[1][1+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
            >
            {news[0][1+indexVariable]}
        </Button>,
        <Button 
            key="3" 
            href={news[1][2+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][2+indexVariable]}
        </Button>,
        <Button 
            key="4" 
            href={news[1][3+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][3+indexVariable]}
        </Button>,
        <Button 
            key="5" 
            href={news[1][4+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][4+indexVariable]}
        </Button>,
        <Button 
            key="5" 
            href={news[1][5+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][5+indexVariable]}
        </Button>,
        <Button 
            key="5" 
            href={news[1][6+indexVariable]} 
            rel="noreferrer" 
            target="_blank"
        >
            {news[0][6+indexVariable]}
        </Button>,
            <Button 
                key="5" 
                href={news[1][7+indexVariable]} 
                rel="noreferrer" 
                target="_blank"
            >
                {news[0][7+indexVariable]}
            </Button>,
            <Button 
                key="5" 
                href={news[1][8+indexVariable]} 
                rel="noreferrer" 
                target="_blank"
            >
                {news[0][8+indexVariable]}
            </Button>,
    ];

        return (
            <div className="news-wrap">
                <div className="news-result-wrap">
                    <Box
                    sx={{
                        display: 'flex',
                        '& > *': {
                        m: 1,
                        },
                    }}
                    >
                    <ButtonGroup
                        orientation="vertical"
                        aria-label="vertical contained button group"
                        variant="text"
                    >
                        {buttons}
                    </ButtonGroup>
                    </Box>
                </div>
                <div className="button-position">
                    <IndexButton 
                        indexVariable={indexVariable}
                        addIndex={addIndex}
                        subtractIndex={subtractIndex}
                    />
                </div>
            </div>
        );
};

export default NewsAggregator;