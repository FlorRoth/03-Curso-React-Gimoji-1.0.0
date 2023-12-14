import { useEffect, useState } from 'react'

export const usePaginate = (initialOffset, limit, pageData,setPage) => {

    const [offset, setOffset] = useState(initialOffset);
    

    useEffect(() => {
        setPage(1);
    }, [pageData])


    const onNext = () => {
        setOffset( prev => prev + limit);
        setPage(prev => prev + 1);
    }


    const onPrev = () => {

        setOffset( prev => {
            if(prev <= 0){
                setPage(pageData)
                return 0
            } else {
                setPage(prev => prev - 1);
                return prev - limit;
            }
        });
    }


  return {
    offset,
    onNext,
    onPrev
  }
}