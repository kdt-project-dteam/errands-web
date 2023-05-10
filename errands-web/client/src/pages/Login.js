import '../css/Login.scss';
import React, { useState } from 'react';
import axios from 'axios';
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
        }
        else if (!userId) {
            return alert('ID를 입력하세요');
        }
        else if (!userPw) {
            return alert('Password를 입력하세요');
        }
        const data = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/login',
            data: {
                user_id: userId,
                user_pw: userPw,
            }, withCredentials: true,
        });
        if (data.data.msg === true) {
            alert('로그인 성공');
            dispatch(newStore.actions.userInfoReducers({
                isLogin: true,
                userInfo: data.data.user_info,
            }))
        } else {
            alert('ID,PW 불일치..');
            setUserId('');
            setUserPw('');
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
                        {/* <a href="http://localhost:3000/Signup" target="_blank">
                            회원가입
                        </a> */}
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;