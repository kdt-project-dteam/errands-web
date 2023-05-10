import { Link } from 'react-router-dom';
import '../css/MyWrite.scss';
import { useState } from 'react';
export default function MyWrite() {
    const myPageUser = localStorage.getItem('userId');
    const getWriteData = async () => {
    }
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
            </div>
            <div className="myWrite">
                <table>
                    <th className="title">제목</th>
                    <th className="date">날짜</th>
                    <th className="number">조회수</th>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                        <td>20</td>
                    </tr>
                </table>
            </div>
        </>
    );
}
