import { Card } from "./Card";
import { Search } from "../ui/Search";
import { Select } from "../ui/Select";
import { useAxios } from "../../hooks/useAxios";
import React, { useState,useEffect } from 'react'
import { usePaginate } from "../../hooks/usePaginate";

const apiKey = import.meta.env.VITE_APIKEY_GIPHY;

export const Gimoji = () => {
    

    const [textSearch, setTextSearch] = useState('animals');

    const [limit, setLimit] = useState(16);
    const [page, setPage] = useState(1);
    const {offset, onNext, onPrev} = usePaginate(0,limit,1,setPage);

    const urlSearch = `search?api_key=${apiKey}&q=${textSearch}&limit=${limit}&offset=${offset}`;
    const urlCategories = `categories?api_key=${apiKey}`;
    
    const { dataApi: dataGifs} = useAxios(urlSearch);
    const { dataApi: dataCategories } = useAxios(urlCategories);



    const onClickSelect = (e) => {
        setTextSearch(e.target.value);
        setLimit(16);
    }

    const onChangeSeach = (e) => {
        setTextSearch(e.target.value);
        setLimit(16);
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
                        <Card key={dataGif.id} data={dataGif}/>
                      </div>  
                    ))}
                </div>

                <nav>
                    <ul className="pagination pagination-lg justify-content-center mt-5">
                        <li className="page-item" onClick={onPrev}>
                        <a className="btn page-link bg-primary text-light"  aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item bg-primary text-light"><a className="page-link" >{page}</a></li>
                        <li className="page-item" onClick={onNext}>
                        <a className=" btn page-link bg-primary text-light"  aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>        
    </>
  )
}
