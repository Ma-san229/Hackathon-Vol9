import { Link } from "react-router-dom";

const VoiceInput = () => {

    return (
      <div>
        <div className="fixed top-4 left-2 z-10">
          <Link 
              to="/"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
          > ← </Link>
        </div>
        <div className="px-6 py-20 text-center text-surface bg-neutral-700 text-white">
          <h1 className="mb-6 text-5xl font-bold">音声認識</h1>
          <p className="mb-8 text-3xl font-bold">ここでは，音声を入力として画像をAIに出力させ，アルバムに追加することができます！</p>
        </div>
        <div className="container mx-auto px-8 py-10">
              <div className="flex justify-center items-center">
                  <Link 
                      to="/success"
                      className="text-2xl bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                  >音声入力開始！</Link>
              </div>
          </div>
        <Link to="/failure" className="bg-blue-500 text-white font-bold rounded fixed bottom-4 right-2 z-10 hover:bg-blue-700 transition duration-300 ease-in-out">
          開発用：文章作成失敗時
        </Link>
      </div>
    );
  }
export default VoiceInput;