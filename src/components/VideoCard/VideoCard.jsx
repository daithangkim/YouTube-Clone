import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const VideoCard = ({ video }) => {
    const {
        title,
        channelTitle,
        description,
        thumbnail,
        viewCount,
        publishedTimeText
    } = video;

    return (
        <Card style={{ marginBottom: '20px' }}>
            <CardMedia
                component="img"
                height="140"
                image={thumbnail[0]?.url} // Using the first thumbnail image
                alt={title}
            />
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {channelTitle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {viewCount} views * {publishedTimeText || "Live"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default VideoCard;
