import { Link } from 'react-router-dom';
import '../css/Comment.scss';
export default function MyWrite() {
    return (
        <>
            <div className="MyPage">
                <div className="Header">
                    <div>
                        <Link to="/myImformation">내정보</Link>
                    </div>
                    <div>
                        <Link to="/myWrite">작성 글</Link>
                    </div>
                    <div>
                        <Link to="/myComment">작성 댓글</Link>
                    </div>
                    <div>
                        <Link to="/withDraw">회원탈퇴</Link>
                    </div>
                    <div>
                        <Link to="/signOut">로그아웃</Link>
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
