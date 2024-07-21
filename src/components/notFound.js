import { Link } from "react-router-dom";

const  NotFound = () => {
    return (
        <div>
            <h1>ページが見つかりません。</h1>
            <p>URLが間違っている可能性があります。</p>

            <Link to="/">ホームに戻る</Link>
        </div>
    )
}

export default NotFound;