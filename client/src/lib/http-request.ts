import axios from 'axios'; 
import { DemoCrawlData } from '../../types';

export const baseUrl: string = "http://127.0.0.1:8000/crawler";


export const getAllCrawlData = async (url: string) => {
    // Use the HttpInstance to make the reques
    
    console.log(localStorage.getItem('token'));
    
    try {
        const response = await axios.get(url,  {
            headers: { 
                "Content-Type": "application/json" , 
                "Authorization": `Token ${localStorage.getItem('token')}`}
        });
        
        const data = response.data;
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error)
    }
}



export const postCrawlData = async (url: string, userData: DemoCrawlData) => {
    
    // use the httpInstance to make the request
    const response = await HttpInstance.post(url, userData);
    const data = response.data;
    return data;

    
    // try {
    //     const jsonData = JSON.stringify({
    //         "name": "demo 10ish?",
    //         "url": "https://www.youtube.com/watch?v=wns99xV3Szc&list=RDj3SmKetIyZ4&index=5",
    //         "attributes": [
    //             {
    //                 "key": "This is Dumb",
    //                 "value": "Will not work"
    //             }
    //         ]
    //     });
        
    //     const response = await axios.post(url, jsonData , {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": 'Token bd2613d0b1d0171533728b4070cd23eed202323fc57c427c550582f398a2cefc'
    //         }    
    //     });
      
    //     const data = response.data;  

    //     return data; 
    // }
    // catch (error: string | any | undefined) {
    //     console.log(error)
    // }

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