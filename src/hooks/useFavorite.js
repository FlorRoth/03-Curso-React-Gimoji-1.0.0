import React,{useState} from 'react';

export const useFavorite = () => {

    const [favorite, setFavorite] = useState(false);

    const onClickFavorite = () => {
        setFavorite((prev) => !prev);
     }

    
    return {
        favorite,
        onClickFavorite
    }
}
