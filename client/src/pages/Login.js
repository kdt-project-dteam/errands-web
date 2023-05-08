import '../css/Login.scss';
import React, { useState } from 'react';
import axios from 'axios';
// /api/login
const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const LoginFunc = async (e) => {
        e.preventDefault();
        if (!userId && !userPw) {
            return alert('ID와 Password를 입력하세요');
        } else if (!userId) {
            return alert('ID를 입력하세요');
        } else if (!userPw) {
            return alert('Password를 입력하세요');
        }
        await axios({
            method: 'post',
            url: 'http://localhost:8080/api/login',
            data: {
                user_id: userId,
                user_pw: userPw,
            },
        }).then((res) => {
            if (res.data === true) {
                alert('로그인 성공');
                window.location.href = '/';
            } else {
                alert('ID 또는 PW가 불일치합니다');
                setUserId('');
                setUserPw('');
            }
        });
        const KakaoLogIn = () => {
            // 카카오 로그인 함수를 실행시키면 아래에 설정해 놓은 KAKAO_AUTH_URL 주소로 이동한다.
            // 이동 된 창에서 kakao 계정 로그인을 시도할 수 있으며 로그인 버튼 클릭 시 Redirect URI로 이동하면서 빈 화면과 함게 인가코드가 발급된다.(인가코드는 파라미터 값에 들어가 있다!)
            const REST_API_KEY = 'REST API KEY';
            const REDIRECT_URI = 'http://localhost:3000/oauth';
            const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

            const kakaoLogin = () => {
                window.location.href = KAKAO_AUTH_URL;
            };

            return (
                <React.Fragment>
                    <button onClick={kakaoLogin}>kakaoLogin</button>
                </React.Fragment>
            );
        };
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
                    <div className="hr-sect">또는</div>
                    <button className="kakaoLogin" onClick={kakaoLogin}>
                        <img src="/img/kakaoLogo.png" alt="kakaoLogo" />
                        카카오 계정으로 로그인
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Login;
