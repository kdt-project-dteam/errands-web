import { Link } from "react-router-dom";
import "../css/LogOut.scss";
import axios from "axios";
export default function SignOut() {
  const myPageUser = localStorage.getItem("userId");
  const logOut = async () => {
    const result = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/api/logout`,
      data: {
        user_id: myPageUser,
      },
    });
    if (result.data === true) {
      localStorage.clear();
      window.location.href = "/";
      alert("로그아웃 되었습니다.");
    }
  };
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
            <Link to="/mypage/withDraw">회원탈퇴</Link>
          </div>
          <div>
            <Link to="/mypage/signOut">로그아웃</Link>
          </div>
        </div>
        <div className="logOut">
          <div className="logout-div card">
            <h3>로그아웃 하시겠습니까?</h3>
            <button type="button" onClick={logOut}>
              예
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
