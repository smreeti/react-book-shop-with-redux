import axios from 'axios'

let Axios = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com'
    //http://api.icndb.com/jokes/random/5
});

Axios.interceptors.request.use(config => {
        console.log(config.url);
        console.log(config.baseURL);

        //before axios sends out the request, set header eg. myToken = 'hello'
        //since every request needs this header, put this action in interceptor is reasonable

        // if u add new Chainable promise or other interceptor
        // You have to return `config` inside of a request
        // otherwise u will get a very confusing error
        //  and spend sometime to debug it.

        // config.headers.Authorization = 'test';

        return config
    },
    (error) => {
        console.log(error);
    }
);

Axios.interceptors.response.use(response => {
        console.log(response);
        //this response contains data, headers, status..
        //So a common use of response interceptors is to simply return the response.data while ignoring
        //other stuff in response
        return response.data;
    },
    (error) => {
        console.log(error);
    }
);

export default Axios