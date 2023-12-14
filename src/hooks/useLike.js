import React,{useState} from 'react';

export const useLike = (initalValue) => {

    const [likes, setLikes] = useState(initalValue);

    const updateLikes = () => {
        setLikes((prev) => prev+1);
     }

    
    return {
        likes,
        updateLikes
    }
}
