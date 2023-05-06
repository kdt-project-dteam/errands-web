import '../css/Signup.scss';
import axios from 'axios';
import React, { useState } from 'react';
// /api/login
const Signup = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userType, setUserType] = useState('');
    const [CheckId, setCheckId] = useState('');
    const [CheckName, setCheckName] = useState('');
    const SignupFunc = async (e) => {
        console.log('> userId : ', userId);
        console.log('> userPw : ', userPw);
        console.log('> userName : ', userName);
        console.log('> userType : ', userType);
        e.preventDefault();
        const res = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/register',
            data: {
                user_id: userId,
                user_pw: userPw,
                user_name: userName,
                user_type: userType,
            },
        });
        console.log('> res : ', res);
    };
    const CheckIdFunc = async (e) => {
        const res = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/checkId',
            data: {
                user_id: CheckId,
            },
        }).then((res) => {
            res.data === 'false' ? alert('아이디가 중복입니다') : alert('가능한 아이디 입니다');
        });
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
                    </div>

                    <div className="field">
                        <input
                            type="password"
                            id="password"
                            value={userPw}
                            onChange={(e) => setUserPw(e.target.value)}
                        />
                        <label htmlFor="password" title="비밀번호" data-title="비밀번호"></label>
                    </div>
                    <div className="field">
                        <input
                            type="text"
                            id="name"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                                setCheckName(e.target.value);
                            }}
                        />
                        <label htmlFor="name" title="이름" data-title="이름"></label>
                        <button>중복확인</button>
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
                </div>
            </div>
        </div>
    );
};
export default Signup;
