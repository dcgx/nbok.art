import axios from 'axios';

const OPENSEA_BASE_URL = "https://api.opensea.io";
const OPENSEA_API_KEY = "YOUR_API_KEY";

const openseaClient = axios.create({
    baseURL: OPENSEA_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': OPENSEA_API_KEY
    }
})

export const fetchOpenseaAssets = async () => {
    const path = `/api/v1/assets?`;
    return openseaClient.get(path).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}