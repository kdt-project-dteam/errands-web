import "../css/Login.scss";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { newStore } from "../index.js";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// /api/login
const Login = () => {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const LoginFunc = async (e) => {
    if (!userId && !userPw) {
      return alert("ID와 Password를 입력하세요");
      //  inputRef.current.focus();
    } else if (!userId) {
      return alert("ID를 입력하세요");
    } else if (!userPw) {
      return alert("Password를 입력하세요");
    }
    const data = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/api/login`,
      data: {
        user_id: userId,
        user_pw: userPw,
      },
      withCredentials: true,
    });
    console.log(data);
    if (data.data.msg === true) {
      Swal.fire({
        icon: "success",
        title: "회원가입 성공!",
        showConfirmButton: false,
        timer: 1500,
      }).then((window.location.href = "/"));
      localStorage.setItem("userName", data.data.user_info.user_name);
      localStorage.setItem("userId", data.data.user_info.id);
    } else {
      Swal.fire({
        icon: "error",
        title: "ID 혹은 PW가 일치하지 않습니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      setUserId("");
      setUserPw("");
    }
  };

  return (
    <div className="login-container">
      <div className="login-contents">
        <h2>LOGIN</h2>
        <form>
          <div className="field">
            <input
              type="text"
              required
              autoComplete="off"
              id="id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              //          ref={inputRef}
            />
            <label htmlFor="id" title="아이디" data-title="아이디"></label>
          </div>
          <div className="field">
            <input
              type="password"
              required
              autoComplete="off"
              id="password"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
            />
            <label
              htmlFor="password"
              title="비밀번호"
              data-title="비밀번호"
            ></label>
          </div>
          <div className="button-container">
            <button type="button" onClick={LoginFunc}>
              로그인
            </button>
            <p>계정이 없으신가요?</p>
            <Link to={"/signup"}>회원가입</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
