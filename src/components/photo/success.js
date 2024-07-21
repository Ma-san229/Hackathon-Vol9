import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const fetchImage = async (setItem) => {
  const searchWord = "lion";
  const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchWord}`);
  const data = await res.json();

  const item = data.find(item => item.show.image);
  if (item) {
      setItem({
          imageUrl: item.show.image.medium,
      });
  }
};

const AlbumInfo = ({ image_url}) => {
  return (
      <div className="max-w-sm border border-gray-200 rounded-lg shadow-lg">
          <div className="flex justify-center items-center">
              <img className="object-contain" src={image_url} alt="generated_image" />
          </div>
      </div>
  );
};

const Success = () => {

  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      fetchImage(setItem);
  }, []);

  const handleSave = () => {

    navigate('/save', { state: { imageUrl: item.imageUrl } });
  };

  const handleNotSave = () => {
    navigate('/notsave');
  };

  return (
    <div>
      <div className="px-6 py-20 text-center text-surface bg-neutral-700 text-white">
        <h1 className="mb-6 text-5xl font-bold">音声認識</h1>
        <p className="mb-8 text-3xl font-bold">ここでは，音声を入力として画像をAIに出力させ，アルバムに追加することができます！</p>
      </div>
      <div className="flex flex-wrap justify-center pt-8">
        {item ? (
            <AlbumInfo image_url={item.imageUrl}/>
        ) : (
            <p className="text-white text-2xl">Loading...</p>
        )}
      </div>
      <p className="mb-8 text-3xl font-bold text-center pt-8"> 画像が生成されました！</p>
      <div className="container mx-auto px-8">
        <div className="flex justify-center items-center gap-4">
            <button
                onClick={handleSave}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            >保存する</button>
            <button
                onClick={handleNotSave}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
            >保存しない</button>
        </div>
      </div>
    </div>
  );
}
export default Success;