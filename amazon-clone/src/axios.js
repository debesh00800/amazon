import axios from "axios";
//axios is used to fetch alternate is js fetch api

const instance=axios.create({
    baseURL: 'http://127.0.0.1:5001/challenge-6c69d/us-central1/api' //api url(cloud function)
});

export default instance;