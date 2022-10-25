import axios from 'axios'; 

import { DemoCrawlData } from '../../types';

export const baseUrl: string = "http://127.0.0.1:8000/configs/"

export const fetchAPI = async (url: string, userData?: DemoCrawlData) => {
    // Get Data
    try {
        const response = await axios.get(url)
        const data = await response.data;

        return data
    }
    catch (error: string | any | undefined) {
        console.log(error);
    }
}
