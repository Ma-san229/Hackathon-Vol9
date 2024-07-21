import { Link } from "react-router-dom";

const TextInput = () => {

    return (
      <div>
        <div className="px-6 py-20 text-center text-surface bg-neutral-700 text-white">
          <h1 className="mb-6 text-5xl font-bold">音声認識</h1>
          <p className="mb-8 text-3xl font-bold">ここでは，音声を入力として画像をAIに出力させ，アルバムに追加することができます！</p>
        </div>
        <p className="mb-8 text-3xl font-bold text-center pt-8"> sampletextという文章が生成されました</p>
        <p className="mb-8 text-3xl font-bold text-center pt-8"> 画像を生成しますか？</p>
        <div className="container mx-auto px-8">
            <div className="flex justify-center items-center gap-4">
                <Link 
                    to="/success"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                >はい</Link>
                <Link
                    to="/voiceinput"
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                >音声入力に戻る</Link>
            </div>
        </div>
        <Link to="/failure" className="bg-blue-500 text-white font-bold rounded fixed bottom-4 right-2 z-10 hover:bg-blue-700 transition duration-300 ease-in-out">
          開発用：画像作成失敗時
        </Link>
      </div>
    );
  }
export default TextInput;