import axios from 'axios';

const KEY = 'AIzaSyA6xTs88pI0SvZnRX_wYSk6gRGRc22em0I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: KEY
  }
});
