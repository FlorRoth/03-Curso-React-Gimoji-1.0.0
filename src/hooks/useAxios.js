import axios from 'axios';
import React,{useEffect,useState} from 'react';

const urlApi = import.meta.env.VITE_URL_API; 

const reqAxios = axios.create({
        baseURL: urlApi,
        timeout: 12000,
        headers: {
            "Content-Type": 'application/json',
        }
});

export const useAxios = (url,method,params) => {

    const [dataApi, setDataApi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
   
    useEffect(() => {
        getFetch();
    }, [url])
    
    
    const getFetch = async() => {
        const resp = await reqAxios({
            url: url,
            method: method,
            params: {params}
        });

        const { data } = await resp.data;
        setDataApi(data)
        setIsLoading(false);
    }
    
    return {
        dataApi,
        isLoading
    }
}

useAxios.defaultProps ={
    method: 'get',
    params: null
}