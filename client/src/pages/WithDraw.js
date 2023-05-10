import { Link } from 'react-router-dom';
import '../css/withDraw.scss';
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
                <div className="memberImfor">회원탈퇴</div>

                <div className="Signout">회원탈퇴시 유의사항</div>
                <hr />
                <div className="Content">
                    <p>
                        -회원 탈퇴 처리 후에는 회원님의 개인정보를 복원할 수 없으며, 회원탈퇴 진행 시 해당 아이디는
                        영구적으로 삭제되어 재가입이 불가능합니다.
                    </p>

                    <p>
                        -회원 탈퇴 시 개인 정보 및 사이트에서 만들어진 모든 데이터는 삭제됩니다. 아래 항목은 표기된
                        법률에 따라 1일동안 보관됩니다.
                    </p>
                </div>
                <hr />
                <div className="SignoutPlay">회원탈퇴하기</div>
                <hr />
                <div>회원탈퇴를 위해 아이디와 비밀번호를 입력해주세요</div>
                <form>
                    <div className="field">
                        <input type="text" id="ID" />
                        <label htmlFor="ID" data-title="아이디"></label>
                    </div>

                    <div className="field">
                        <input type="password" id="PW" />
                        <label htmlFor="PW" data-title="비밀번호" />
                        <br />
                        <button>회원탈퇴하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
