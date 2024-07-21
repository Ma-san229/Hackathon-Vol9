import { Link } from "react-router-dom";

const Failure = () => {

  return (
    <div>
      <div className="px-6 py-20 text-center text-surface bg-neutral-700 text-white">
        <h1 className="mb-6 text-5xl font-bold">音声認識</h1>
        <p className="mb-8 text-3xl font-bold">ここでは，音声を入力として画像をAIに出力させ，アルバムに追加することができます！</p>
      </div>
      <p className="mb-8 text-3xl font-bold text-center pt-8">画像が生成できませんでした...</p>
      <div className="flex justify-center items-center">
        <Link to="/" className="text-2xl bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">
            タイトルへ戻る
        </Link>
      </div>
    </div>
  );
}
export default Failure;