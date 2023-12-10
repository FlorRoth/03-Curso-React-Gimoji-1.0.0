import axios from 'axios';

const urlApi = import.meta.env.VITE_URL_API;

const reqAxios = axios.create({
    baseURL: urlApi,
    timeout: 12000,
    headers: {
        "Content-Type": 'application/json',
    }
});

export const useAxios = (url) => {

    const [dataApi, setDataApi] = useState([]);
    
    useEffect(() => {
        getFetch();
    }, [url])
    
    
    const getFetch = async() => {
        const resp = await reqAxios.get(url);
        const { data } = await resp.data;
        setDataApi(data)
    }
    
    return {
        dataApi
    }
}
