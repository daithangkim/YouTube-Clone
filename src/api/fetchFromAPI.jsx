import axios from 'axios';

const BASE_URL = 'https://yt-api.p.rapidapi.com/home';

const fetchFromAPI = async (url) => {
    const options = {
        method: 'GET',
        url: `${BASE_URL}/${url}`,
        params: {
            maxResults: '50'
        },
        headers: {
            'x-rapidapi-key': process.env.REACT_APP_RAPID_KEY,
            'x-rapidapi-host': 'yt-api.p.rapidapi.com'
        }
    };

    try {
        const { data } = await axios.request(options);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default fetchFromAPI;
