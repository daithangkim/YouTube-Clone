import React from 'react';
import {Box, Button} from "@mui/material";

const HomeRecommendationButtons = () => {
    return (
        <Box>
            {['All', 'Music', 'JavaScript', 'Boxing', 'Mixes', 'Sparring', 'Stocks', 'Podcasts', 'AI']
                .map((recommendation, index) => (
                    <Button
                        key={index}
                        sx={{
                            backgroundColor: 'grey.200',
                            borderRadius: 5,
                            padding: 1,
                            margin: 1,
                            color: 'black',
                            '&:hover': {
                                backgroundColor: 'grey.300',
                            },
                        }}
                    >
                        {recommendation}
                    </Button>
                ))}
        </Box>
    );
}

export default HomeRecommendationButtons;
