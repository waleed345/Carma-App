import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org'
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
};

export const get = async (url) => {
    let resp = await axios.get(`${BASE_URL}${url}`, { headers })
    // console.log(resp.data)
    return resp.data
}

export const post = async (url, data) => {
    let resp = await axios.post(`${BASE_URL}${url}`, { data }, { headers })
    // console.log(resp.data)
    return resp.data
}