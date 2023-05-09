import React from 'react';
import '../css/myPage.scss';
import { Link } from 'react-router-dom';
// /api/login
const MyPage = () => {
    return (
        <div className="MyPage">
            <div className="Header">
                <div>
                    <Link to="/myImformation">내정보</Link>
                </div>
                <div>
                    <Link to="/myWrite">작성 글</Link>
                </div>
                <div>
                    <Link to="/myComment">작성 댓글</Link>
                </div>
                <div>
                    <Link to="/withDraw">회원탈퇴</Link>
                </div>
                <div>
                    <Link to="/signOut">로그아웃</Link>
                </div>
            </div>
        </div>
    );
};
export default MyPage;
