import axios from 'axios';
export const HTTP = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    headers: {
        Authorization: 'Bearer {token}'
    },
    transformRequest: [function (data, headers) {
        console.log(headers);
        return data;
    }]
})