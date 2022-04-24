import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org'
const headers = {
    'Content-Type': 'application/json;charset=utf-8',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQwYTNjZWM2ZDFmNDJlMmY0ZTQ1NTVkMTZjYzU3ZCIsInN1YiI6IjYyNWYxMDFmZGI5NTJkMDA0Zjg4NzAwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cAbQD-duRpRNWSYDdRAqrjBtJrNihi4UTegq6MEfm7s',
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