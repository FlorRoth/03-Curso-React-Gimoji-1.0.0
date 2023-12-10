import { Card } from "./Card";
import { Search } from "../ui/Search";
import { Select } from "../ui/Select";
import { useAxios } from "../../hooks/useAxios";
import React, { useState } from 'react'

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
    

    const [textSearch, setTextSearch] = useState('animals');
    const [limit, setLimit] = useState(16);

    const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=0`;
    const urlCategories = `categories?api_key=${apiKey}`;
    
    const { dataApi: dataGifs } = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);

    const onClickSelect = (e) => {
        setTextSearch(e.target.value);
        setLimit(16);
    }

    const onChangeSeach = (e) => {
        setTextSearch(e.target.value);
        setLimit(16);
    }
    
    const updateLimit = () => {
        setLimit(limit+16);
    }

    return (
    <>
        
        <div className="container-fluid mt-5">
            <div className="row justify-content-start">
                <Select options={dataCategories} onClickSelect={onClickSelect}/>
                <Search textSearch={textSearch} onChangeSeach={onChangeSeach}/>
            </div>
        </div>

        <div className="album py-5 ">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                    {dataGifs.map((dataGif,index) => (
                      <div className="col" key={index}>
                        <Card data={dataGif}/>
                      </div>  
                    ))}
                </div>

                <div className="row mt-5" style={{ justifyContent: 'center', alignItems: 'center'}}>
                       <button type="button" className="btn btn-primary" onClick={updateLimit}>
                           Cargar más 
                        </button> 
                </div>
            </div>
        </div>        
    </>
  )
}
