import "../css/Signup.scss";
import axios from "axios";
import React, { useState } from "react";
import SocialLogin from "../components/SocialLogin";
import Swal from 'sweetalert2';
// /api/login
const Signup = () => {
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [userName, setUserName] = useState("");
    const [userType, setUserType] = useState("");
    const [CheckId, setCheckId] = useState("");
    const [CheckedId, setCheckedId] = useState(false);
    const [CheckName, setCheckName] = useState(false);
    const SignupFunc = async (e) => {
        console.log("> userId : ", userId);
        console.log("> userPw : ", userPw);
        console.log("> userName : ", userName);
        console.log("> userType : ", userType);
        if (CheckedId === true && CheckName === true) {
            console.log("=====");
            const result = await axios({
                method: "post",
                url: "http://localhost:8080/api/register",
                data: {
                    user_id: userId,
                    user_pw: userPw,
                    user_name: userName,
                    user_type: userType,
                },
            });
            if (result.data === true) {
                Swal.fire({
                    icon: 'success',
                    title: '회원가입 성공!',
                    showConfirmButton: false,
                    timer: 1500
                })
                window.location.href = "/";
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'error : 회원가입 실패!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'error : 중복검사를 해주세요',
                showConfirmButton: false,
                timer: 1500
            })
        }
    };
    const CheckIdFunc = (e) => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/checkId",
            data: {
                user_id: CheckId,
            },
        }).then((res) => {
            if (res.data === false) {
                const element = document.getElementById("possibleId");
                element.innerHTML = "<div>중복된 아이디 입니다.<div>";
                setCheckedId(false);

                setUserId("");
            } else {
                const element = document.getElementById("possibleId");
                element.innerHTML = "<div>사용이 가능한 아이디 입니다.<div>";
                setCheckedId(true);
            }
        });
    };

    const CheckNameFunc = (e) => {
        axios({
            method: "post",
            url: "http://localhost:8080/api/checkName",
            data: {
                user_name: userName,
            },
        }).then((res) => {
            console.log(res.data);
            if (res.data === true) {
                const element = document.querySelector("#possibleName");
                element.innerHTML = "<div>사용이 불가능한 닉네임 입니다<div>";
                setCheckName(false);

                setUserName("");
            } else {
                const element = document.querySelector("#possibleName");
                element.innerHTML = "<div>사용이 가능한 닉네임 입니다<div>";
                setCheckName(true);
            }
        });
    };

    const getKakaoLoginAccess = (kakaoLoginData) => {
        setUserId(kakaoLoginData.profile.kakao_account.email.split("@")[0]);
        setUserName(kakaoLoginData.profile.kakao_account.profile.nickname);
    };

    return (
        <div className="signup-container">
            <div className="signup-contents">
                <h2>SIGNUP</h2>
                <div>
                    <div className="field">
                        <input
                            type="text"
                            id="id"
                            value={userId}
                            onChange={(e) => {
                                setUserId(e.target.value);
                                setCheckId(e.target.value);
                            }}
                        />
                        <label htmlFor="id" title="아이디" data-title="아이디"></label>
                        <button onClick={CheckIdFunc}>중복확인</button>
                        <div id="possibleId"></div>
                    </div>

                    <div className="passwordField">
                        <input
                            type="password"
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
                    <div className="field">
                        <input
                            type="text"
                            id="name"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                        />
                        <label htmlFor="name" title="이름" data-title="이름"></label>
                        <button onClick={CheckNameFunc}>중복확인</button>
                        <div id="possibleName"></div>
                    </div>
                    <div className="select">
                        <input
                            type="radio"
                            id="select"
                            name="shop"
                            value="W"
                            onClick={(e) => setUserType(e.target.value)}
                        />
                        <label htmlFor="select">구인자</label>
                        <input
                            type="radio"
                            id="select2"
                            name="shop"
                            value="H"
                            onClick={(e) => setUserType(e.target.value)}
                        />
                        <label htmlFor="select2">구직자</label>
                    </div>
                    <div className="button-container">
                        <button onClick={SignupFunc}>가입하기</button>
                    </div>
                    <div className="goLogin">
                        <p>이미 계정이 있으십니까?</p>
                        <a href="http://localhost:3000/login">로그인하기</a>
                    </div>
                    <div className="hr-sect">또는</div>
                    <button className="kakaoSignup">
                        <SocialLogin getKakaoLoginAccess={getKakaoLoginAccess} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
