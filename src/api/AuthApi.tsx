import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.105:8090/api';

const authApi = axios.create({ baseURL });

authApi.interceptors.request.use(
    async(config) => {
        const token = JSON.parse(await AsyncStorage.getItem('token') ?? 'null');
        if ( token ) {
            config.headers['authorization'] = 'Bearer ' + token.token;
        }
        return config;
    }
);



export default authApi;
