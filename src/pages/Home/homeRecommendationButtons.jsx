import React from 'react';
import {Button} from "@mui/material";

const HomeRecommendationButtons = () => {
    return (
        <div>
            {['All', 'Music', 'JavaScript', 'Boxing', 'Mixes', 'Sparring', 'Stocks', 'Podcasts', 'AI']
                .map((recommendation, index) => (
                    <Button key={index}
                            sx={{
                                backgroundColor: 'grey.400', borderRadius: 20, margin: 1, color: 'black'
                            }}>{recommendation}</Button>
                ))}
        </div>
    );
}

export default HomeRecommendationButtons;
