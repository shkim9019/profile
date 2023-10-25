import axios from "axios";

const useUserApi = (search) => {
    const axiosData = async() => {
        try{
            const response = await axios({
                method: 'get',
                url:`${search}`,
                baseURL:'http://localhost:3001/user/' 
            });
            
            return response.data;
        }catch(e){
            console.log(e);
            alert("error page");
            // return {};
            return Promise.reject(e);
        }
    }
    return axiosData;
}

export default useUserApi;