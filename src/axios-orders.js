import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-35a5f-default-rtdb.firebaseio.com/'
});

export default instance;