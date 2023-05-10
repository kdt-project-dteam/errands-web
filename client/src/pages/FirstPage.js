import '../css/backgroundImage.scss';
import { Link } from 'react-router-dom';
export default function FirstPage() {
    return (
        <>
            <div className="backgroundImage">
                <img src="/img/backgroundImage.jpg" alt="배경사진"></img>
                <div className="errand">
                    <div className="title">심부릉</div>
                    <div className="explain">
                        <div>심부릉을 통해 심부름을 빠르고 안전하게 실시하세요!</div>
                        <div>빠른 심부름 서비스</div>
                        <button>
                            <Link to="/main">바로가기</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="explain2">
                <div>Our Servie</div>
            </div>
        </>
    );
}
