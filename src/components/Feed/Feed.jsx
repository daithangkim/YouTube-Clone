import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import VideoCard from "../VideoCard/VideoCard";
import HomeRecommendationButtons from "../../pages/Home/homeRecommendationButtons";
import TheatersIcon from "@mui/icons-material/Theaters";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

const Feed = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selectedCategory);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `https://yt-api.p.rapidapi.com/${selectedCategory}`,
                headers: {
                    'x-rapidapi-key': '1e181a34fbmsh45ad7d0b807333dp13c862jsndb4ce002cdff',
                    'x-rapidapi-host': 'yt-api.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setVideos(response.data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [selectedCategory]);

    // Handle category click
    const handleCategoryClick = (text) => {
        dispatch({type: 'SET_SELECTED_CATEGORY', payload: text.toLowerCase()});
    };

    return (
        <Box>
            <HomeRecommendationButtons/>
            <Grid container padding={2}>
                {/* Buttons on the left side */}
                <Grid item xs={0.5}>
                    <Box display="flex" flexDirection="column" paddingY={2}>
                        {['Shorts', 'Subscriptions', 'You'].map((text) => (
                            <Button
                                key={text}
                                onClick={() => handleCategoryClick(text)}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: '60px',
                                    margin: 1,
                                    backgroundColor: selectedCategory === text.toLowerCase() ? 'lightgray' : 'transparent',
                                }}
                            >
                                {text === 'Shorts' ? <TheatersIcon/> : <SubscriptionsIcon/>}
                                <Typography variant="caption" sx={{
                                    fontSize: {xs: '0.4rem', sm: '0.45rem', md: '0.5rem'},
                                    color: 'black',
                                    textAlign: 'center'
                                }}>{text}</Typography>
                            </Button>
                        ))}
                    </Box>
                </Grid>

                {/* Videos on the right side */}
                <Grid item xs={11.5}>
                    <Grid container spacing={3}>
                        {videos.length > 0 ? (
                            videos
                                .filter(video => video.type === 'video')
                                .map((video, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <VideoCard video={video}/>
                                    </Grid>
                                ))
                        ) : (
                            <Grid item xs={12}>
                                <Typography variant="h6">No videos available</Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Feed;
