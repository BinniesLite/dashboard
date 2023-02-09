import axios from 'axios'; 
import { DemoCrawlData } from '../../types';
import { CgLayoutGrid } from 'react-icons/cg';

export const baseUrl: string = "http://127.0.0.1:8000/crawler";

export const getAllCrawlData = async (url: string) => {
    try {
        const response = await axios.get(url);
        const data = await response.data;
        
        console.log(data);
        return data

    }
    catch (error: string | any | undefined) {
        console.log(error);
    }
}

/*
    postCrawlData

    @param url - 
    @param userData - 
    @return 
*/
export const postCrawlData = async (url: string, userData: DemoCrawlData) => {
    try {
        const jsonData = JSON.stringify({
            "name": "demo 10ish?",
            "url": "https://www.youtube.com/watch?v=wns99xV3Szc&list=RDj3SmKetIyZ4&index=5",
            "attributes": [
                {
                    "key": "This is Dumb",
                    "value": "Will not work"
                }
            ]
        });

        console.log(userData)
        
        const response = await axios.post(url, jsonData , {
            headers: {
                'Authentication': 'Token 18f2241dd8c2839ec64437903026b65fffb87662ed2ee8dfc32e86fda1df1aea'
            }    
        });
      
        const data = response.data;  

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

/*
    update crawl data with edit and stuff 
*/
export const updateCrawlData = async (url: string, userData: DemoCrawlData) => {
    try {
        const jsonData = JSON.stringify(userData);
        const response = await axios.put(url, jsonData , {
            headers: {'Content-Type':'application/json'}    
        }); 
      
        const data = response.data;  
        
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error);
    }
}