import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../VideoCard/VideoCard";

const Feed = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selectedCategory);
    const [videos, setVideos] = useState([]); // State to store the fetched data

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
                setVideos(response.data.data); // Update state with the fetched data
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the async function
    }, [selectedCategory]);

    return (
        <Grid container spacing={3} padding={2}>
            {videos.length > 0 ? (
                // only extracting the videos and not the shorts
                videos
                    .filter(video => video.type === 'video')
                    .map((video, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}> {/* Specify how many columns you want */}
                            <VideoCard video={video} />
                        </Grid>
                    ))
            ) : (
                <Grid item xs={12}>
                    <Typography variant="h6">No videos available</Typography>
                </Grid>
            )}
        </Grid>
    );
}

export default Feed;
