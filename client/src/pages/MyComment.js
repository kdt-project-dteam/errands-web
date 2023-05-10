import { Link } from 'react-router-dom';
import '../css/Comment.scss';
export default function MyWrite() {
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
            <div className="myComment">
                <table>
                    <th className="title">내용</th>
                    <th className="date">날짜</th>

                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                    <tr>
                        <td>안녕하세요</td>
                        <td>2022.03.23</td>
                    </tr>
                </table>
            </div>
        </>
    );
}
