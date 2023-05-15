import { Link } from "react-router-dom";
import "../css/myImformation.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
export default function WithDraw() {
    const [myPageUserData, setMyPageUserData] = useState();
    const myPageUserAxios = async () => {
        const myPageUser = localStorage.getItem("userId");
        const result = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_DB_HOST}/api/user/${myPageUser}`,
            withCredentials: true,
        });
        setMyPageUserData(result.data);
        console.log(result.data);
    };
    const inputChange = (e) => {
        console.log(myPageUserData);
        setMyPageUserData({
            ...myPageUserData,
            [e.target.name]: e.target.value,
        });
    };
    const updateUserData = async () => {
        const formData = {
            user_id: myPageUserData.user_id,
            user_pw: myPageUserData.user_pw,
            user_name: myPageUserData.user_name,
            user_type: myPageUserData.user_type,
        };
        const result = await axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_DB_HOST}/api/user/${myPageUserData.id}`,
            data: formData,
            withCredentials: true,
        });
        console.log(formData);
        console.log(result);
    };
    useEffect(() => {
        myPageUserAxios();
    }, []);
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
            <div className="body">
                {myPageUserData ? (
                    <>
                        {" "}
                        <div className="memberImfor">회원정보</div>
                        <div className="imfor">
                            <div>아이디 : {myPageUserData.user_id}</div>
                            <div>닉네임 : {myPageUserData.user_name}</div>
                            <div>
                                유저타입 : {myPageUserData.user_type === "W" ? "구인" : "구직"}
                            </div>
                        </div>
                        <div className="change">회원정보수정하기</div>
                        <p>수정할 정보를 입력해주세요</p>
                        <form>
                            <div className="field">
                                <input
                                    type="password"
                                    id="PW"
                                    name="user_pw"
                                    onChange={inputChange}
                                    value={myPageUserData.user_pw}
                                />
                                <label htmlFor="PW" data-title="비밀번호" />
                            </div>
                            <div className="field">
                                <input
                                    type="text"
                                    id="NAME"
                                    name="user_name"
                                    onChange={inputChange}
                                    value={myPageUserData.user_name}
                                />
                                <label htmlFor="NAME" data-title="이름" />
                            </div>
                            <button type="button" onClick={updateUserData}>
                                수정하기
                            </button>
                        </form>{" "}
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
}
