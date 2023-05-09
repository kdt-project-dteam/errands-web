import '../css/Login.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { newStore } from '../index.js';

// /api/login
const Login = () => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const LoginFunc = async (e) => {
        e.preventDefault();
        if (!userId && !userPw) {
            return alert('ID와 Password를 입력하세요');
            //  inputRef.current.focus();
        } else if (!userId) {
            return alert('ID를 입력하세요');
        } else if (!userPw) {
            return alert('Password를 입력하세요');
        }
        const data = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/login',
            data: {
                user_id: userId,
                user_pw: userPw,
            },
            withCredentials: true,
        });
        if (data.data.msg === true) {
            alert('로그인 성공');
            dispatch(
                newStore.actions.userInfoReducers({
                    isLogin: true,
                    userInfo: data.data.user_info,
                })
            );
        } else {
            alert('ID,PW 불일치..');
            setUserId('');
            setUserPw('');
        }
    };
    const { Kakao } = window;
    //Kakao.Auth.authorize({
    //         redirectUri: 'http://localhost:3000/kakaoLogin',
    //   });
    const loginWithKakao = () => {
        const scope = 'profile_nickname, account_email';
        Kakao.Auth.login({
            scope,
            // success는 인증 정보를 응답(response)으로 받는다.
            success: function (response) {
                //카카오 SDK에 사용자 토큰을 설정한다.
                window.Kakao.Auth.setAccessToken(response.access_token);
                console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

                var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

                window.Kakao.API.request({
                    url: '/v2/user/me',
                    success: function ({ kakao_account }) {
                        //어떤 정보 넘어오는지 확인
                        console.log(kakao_account);
                        const { email, profile } = kakao_account;

                        console.log(email);

                        console.log(profile.nickname);

                        axios({
                            method: 'post',
                            url: '/auth/sns',
                            data: {
                                id: email,
                                nickname: profile.nickname,
                            },
                        })
                            .then((res) => {
                                console.log(res);
                                //history.push('/main/');
                            })
                            .catch((error) => {
                                // console.log(error);
                                console.error(error);
                                alert('카카오 로그인 에러?');
                            });
                    },
                    fail: function (error) {
                        console.log(error);
                    },
                });
            },
            fail: function (error) {
                console.log(error);
            },
        });
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
                        <label htmlFor="password" title="비밀번호" data-title="비밀번호"></label>
                    </div>
                    <div className="button-container">
                        <button type="button" onClick={LoginFunc}>
                            로그인
                        </button>
                        <p>계정이 없으신가요?</p>
                        <a href="http://localhost:3000/Signup" target="_blank">
                            회원가입
                        </a>
                    </div>
                    <div class="hr-sect">또는</div>
                    <button className="kakaoLogin" onClick={loginWithKakao}>
                        <img src="/img/kakaologin.png" alt="kakaoLogin" />
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;
