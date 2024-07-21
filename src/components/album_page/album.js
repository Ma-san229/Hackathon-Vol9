import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumInfo from "./albumInfo";

const Album = () => {
    const [items, setItems] = useState([]);
    
    
    useEffect(() => {
        const fetchImages = async () => {
            const serch_word = "human";
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${serch_word}`);
            const data = await res.json();

            const items = data.map(item => ({
                imageUrl: item.show.image ? item.show.image.medium : null,
                ended: item.show.ended ? item.show.ended : ''
            })).filter(item => item.imageUrl !== null);

            setItems(items);
        };

        fetchImages();
    }, []);

    return (
        <>
            <div className="fixed top-4 left-2 z-10">
                <Link 
                    to="/"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                >Home</Link>
            </div>
            
            <h1 className="text-center text-2xl font-bold my-4">生成画像一覧</h1>
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center">
                    {items.map((item, index) => (
                        <div className="mx-5 my-2">
                            <AlbumInfo key={index} image_url={item.imageUrl} ended_date={item.ended}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Album;
