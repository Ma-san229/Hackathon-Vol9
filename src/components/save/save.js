import React from 'react';
import { Link, useLocation} from "react-router-dom";

const Save = () => {

  const location = useLocation();
  const { imageUrl } = location.state || {};

  return (
    <div>
      <div className="px-6 py-20 text-center text-surface bg-neutral-700 text-white">
        <h1 className="mb-6 text-5xl font-bold">音声認識</h1>
        <p className="mb-8 text-3xl font-bold">ここでは，音声を入力として画像をAIに出力させ，アルバムに追加することができます！</p>
      </div>
      <div className="flex flex-wrap justify-center pt-8">
        <div>
            <img className="object-contain" src={imageUrl} alt="generated_image" />
        </div>
      </div>
      <p className="mb-8 text-3xl font-bold text-center pt-8">画像がアルバムに保存されました！</p>
      <div className="flex justify-center items-center">
        <Link to="/" className="text-2xl bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            タイトルへ戻る
        </Link>
      </div>
    </div>
  );
}
export default Save;