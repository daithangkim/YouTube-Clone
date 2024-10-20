import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled CardMedia with hover effect and cursor change
const StyledCardMedia = styled(CardMedia)({
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.05)',
    },
});

const VideoCard = ({ video }) => {
    const {
        title,
        channelTitle,
        description,
        thumbnail,
        viewCount,
        publishedTimeText,
    } = video;

    return (
        <Card style={{ display: 'flex', flexDirection: 'column', height: '100%', border: 'none' }}>
            <StyledCardMedia
                component="img"
                height="177"
                image={thumbnail[0]?.url}
                alt={title}
            />
            <CardContent style={{ padding: '16px', backgroundColor: 'transparent' }}>
                <Typography variant="h7" gutterBottom style={{ fontWeight: 'bold' }}>
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
