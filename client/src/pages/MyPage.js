import React from "react";
import "../css/myPage.scss";
import { Link } from "react-router-dom";
// /api/login
const MyPage = () => {
  return (
    <div className="MyPage">
      <div className="Header">
        <div>
          <Link to="/mypage/myImformation">내정보</Link>
        </div>
        <div>
          <Link to="/mypage/myWrite">작성 글</Link>
        </div>
        <div>
          <Link to="/mypage/withDraw">회원탈퇴</Link>
        </div>
        <div>
          <Link to="/mypage/signOut">로그아웃</Link>
        </div>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/userImg/21683803320680.png"}
        alt="test img"
      />
    </div>
  );
};
export default MyPage;
