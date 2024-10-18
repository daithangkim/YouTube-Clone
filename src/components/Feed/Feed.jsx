import React, {useEffect} from 'react';
import {Stack} from '@mui/material';
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";

const Feed = () => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selectedCategory)

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
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData(); // Call the async function
    }, [selectedCategory]);

    return (
        <Stack>
            Feed
        </Stack>
    );
}

export default Feed;
