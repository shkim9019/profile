import axios from "axios";

const useUserApi = (method, isLoading,search) => {
    //console.log(isLoading, search)

    if(!isLoading){
        return {}
    }

    const axiosData = async() => {
        try{
            const response = await axios({
                method: `${method}`,
                url:`${search}`,
                baseURL:'http://localhost:3001/user/' 
            });
    
            console.log(">>> ", response.data)
            return response.data;
        }catch(e){
            console.log(e);
            alert("error page");
            return {};
        }
    }

    return axiosData(method, search);
}

export default useUserApi;