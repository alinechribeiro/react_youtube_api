import axios from 'axios';

const KEY = 'AIzaSyDDUlYww0hiueb9HKdPbFEMjAChvqkpVfM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});