import { Link } from 'react-router-dom';
import '../css/LogOut.scss';
export default function SignOut() {
    return (
        <>
            <div className="MyPage">
                <div className="Header">
                    <div>
                        <Link to="/mypage/myImformation">내정보</Link>
                    </div>
                    <div>
                        <Link to="/mypage/myWrite">작성 글</Link>
                    </div>
                    <div>
                        <Link to="/mypage/myComment">작성 댓글</Link>
                    </div>
                    <div>
                        <Link to="/mypage/withDraw">회원탈퇴</Link>
                    </div>
                    <div>
                        <Link to="/mypage/signOut">로그아웃</Link>
                    </div>
                </div>
            </div>
            <div className="logOut">
                <div>로그아웃 하시겠습니까?</div>
                <button>예</button>
            </div>
        </>
    );
}
