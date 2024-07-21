import { Link } from "react-router-dom";
import Header from "./header";

const Title = () => {
    return (
        <>
            <Header />

            <iframe
                src="https://udify.app/chatbot/zvoMe0HF3I7IDyKb"
                className="w-full h-96 border-0"
                title="ai-voice-img"
                style={{ margin: '10px' }}
                frameorder="0"
                allow="microphone">
            </iframe>

            <div className="container mx-auto px-8 py-10">
                <div className="flex justify-center items-center gap-4">
                    <Link 
                        to="/voiceinput"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                    >画像を生成</Link>
                    
                    <Link
                        to="/album"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
                    >生成した画像を表示</Link>
                </div>
            </div>
        </>
    )
}

export default Title;