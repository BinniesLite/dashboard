import axios from "axios";

export const baseUrl = "http://127.0.0.1:8000/account"



export const login = async (username: string, password: string, url: string) => {
    try {
        
        const jsonData = JSON.stringify({username, password});
        
    

        const response = await axios.post(url, jsonData , {
            headers: {'Content-Type':'application/json'}    
        });
      
        const data = response.data;  
        console.log(data);    
        return data; 
    }
    catch (error: string | any | undefined) {
        console.log(error)
    }
}

