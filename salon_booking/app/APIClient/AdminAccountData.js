import { IPAddress } from "../Constant/IPAddress";


const GetAccountDataByKey = async (username, password) => {
    try {
        const response = await fetch(`${IPAddress}/get-admin-account-by-key`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                username,
                password
            }),
        });
  
      
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Error:", error);
    }
};

export {
    GetAccountDataByKey
}