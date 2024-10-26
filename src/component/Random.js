import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Random = () => {
    const [gif, setGif] = useState('');

    const response = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=pveTNmigmvL9eaxt5lTbGBrVbR631SsP`;
        const {data} = await axios.get(url);
        const image = data.data.images.downsized_large.url;
        setGif(image);
    }

    useEffect(()=> {
        
    },[]);

    const handClick = () => {
        response();
    }

    return (
        <div className="Random">
            <h3>status kalian hari ini adalah:</h3>
            <img width={500} src={gif} alt="Click generate"/>
            <button onClick={handClick}>Generate</button>
        </div>
    )
}

export default Random;