import axios from 'axios'; 
import { DemoCrawlData } from '../../types';

export const baseUrl: string = "http://127.0.0.1:8000/config"

export const fetchAPI = async (url: string) => {
    // Get Data
    try {
        const response = await axios.get(url);
        const data = await response.data;

        return data
    }
    catch (error: string | any | undefined) {
        console.log(error);
    }
}
/*
    update
*/
export const updateCrawlData = async (url: string, userData: DemoCrawlData) => {
    console.log(JSON.stringify(userData));
    
    try {
        const jsonData = JSON.stringify(userData)
        
        const response = await axios.post(`http://127.0.0.1:8000/configs/list/`, jsonData , {
        headers: {'Content-Type':'application/json'}    
        
        });
        console.log(response)
        const data = response.data;
        
        console.log(data);
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error)
    }
}

export const deleteCrawlData = async (url: string, id: any | string | number) => {
    try {
        const response = await axios.delete(`${url}/${id}`,  {
            headers: { "Content-Type": "application/json" }
        });
        console.log(response);
        const data = response.data;
        
        
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error)
    }
}

export const getCrawlData = async (url: string, id: any | string | number) => {
    try {
        const response = await axios.get(`${url}/${id}`,  {
            headers: { "Content-Type": "application/json" }
        });
        
        const data = response.data;
        
        
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error)
    }
}