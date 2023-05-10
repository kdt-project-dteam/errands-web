import { Link } from 'react-router-dom';
import '../css/myImformation.scss';
export default function WithDraw() {
    return (
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
            <div className="body">
                <div className="memberImfor">회원정보</div>

                <div className="imfor">
                    <div>아이디란</div>
                    <div>이름</div>
                    <div>구인구직</div>
                </div>

                <div className="change">회원정보수정하기</div>

                <p>수정할 정보를 입력해주세요</p>
                <form>
                    <div className="field">
                        <input type="password" id="PW" />
                        <label htmlFor="PW" data-title="비밀번호" />
                        <br />
                    </div>
                    <div className="field">
                        <input type="text" id="NAME" />
                        <label htmlFor="NAME" data-title="이름" />
                        <br />
                    </div>
                    <div className="select">
                        <input
                            type="radio"
                            id="select"
                            name="shop"
                            value="W"
                            // onClick={(e) => setUserType(e.target.value)}
                        />
                        <label htmlFor="select">구인자</label>
                        <input
                            type="radio"
                            id="select2"
                            name="shop"
                            value="H"
                            //   onClick={(e) => setUserType(e.target.value)}
                        />
                        <label htmlFor="select2">구직자</label>
                    </div>
                    <button>수정하기</button>
                </form>
            </div>
        </div>
    );
}
