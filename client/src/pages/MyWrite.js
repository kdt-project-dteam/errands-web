import { Link } from "react-router-dom";
import "../css/MyWrite.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
export default function MyWrite() {
  const myPageUser = localStorage.getItem("userName");
  const [wanterPost, setWanterPost] = useState();
  const [helperPost, setHelperPost] = useState();
  const getWanterPost = async () => {
    const result = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/api/user/wanter`,
      data: { user_name: "테스트" },
    });
    console.log(result.data);
    setWanterPost(result.data);
  };
  const getHelperPost = async () => {
    const result = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/api/user/helper`,
      data: { user_name: "테스트" },
    });
    console.log(result.data);
    setHelperPost(result.data);
  };
  useEffect(() => {
    getWanterPost();
    getHelperPost();
  }, []);
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
        <div className="my-write-container">
          <div className="myWrite card">
            <h2 className="c-m">구인</h2>
            <table>
              <th className="title">제목</th>
              <th className="date">날짜</th>
              <th className="number">조회수</th>
              {wanterPost ? (
                wanterPost.map((data, idx) => {
                  return (
                    <tr>
                      <td>
                        <Link
                          to={`/board/BoardDetail/wanter/${data.wanter_board_id}`}
                        >
                          {data.wanter_board_title}
                        </Link>
                      </td>
                      <td>{data.wanter_board_date}</td>
                      <td>{data.wanter_board_hit}</td>
                    </tr>
                  );
                })
              ) : (
                <Loading />
              )}
            </table>
          </div>
          <div className="myWrite card">
            <h2 className="c-b">구직</h2>
            <table>
              <th className="title">제목</th>
              <th className="date">날짜</th>
              <th className="number">조회수</th>
              {helperPost ? (
                helperPost.map((data, idx) => {
                  return (
                    <tr>
                      <td>
                        <Link
                          to={`/board/BoardDetail/helper/${data.helper_board_id}`}
                        >
                          {data.helper_board_title}
                        </Link>
                      </td>
                      <td>{data.helper_board_date}</td>
                      <td>{data.helper_board_hit}</td>
                    </tr>
                  );
                })
              ) : (
                <Loading />
              )}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
