import axios from 'axios';

const KEY = 'AIzaSyC-0p1KJiF8ShOKhrPonxy3vPFilrb7ahY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})