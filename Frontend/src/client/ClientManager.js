import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:62376/api/',
    timeout: 1000,
    headers: {'Access-Control-Allow-Origin': '*'}
  });

export default {

    
    post(requestUrl, requestBody) {
        instance.post(
            requestUrl,
            requestBody);
    }
}