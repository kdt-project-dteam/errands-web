import { Link } from 'react-router-dom';
import '../css/withDraw.scss';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function WithDraw() {
    const localId = localStorage.getItem('userId');
    const [userId, setUserId] = useState('')
    const [userPw, setUserPw] = useState('')
    const inputChange = (e) => {
        [e.target.name] = e.target.value
    }

    const userOut = async () => {
        const result = await axios({
            method: "DELETE",
            url: `/api/user/${localId}`
        })
        console.log(result)
        if (result.data === true) {
            Swal.fire({
                icon: 'success',
                title: '아이디가 성공적으로 삭제되었습니다',
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.clear();
            window.location.href = '/';
        }
    }
    return (
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
                        <input type="text" id="ID" onChange={inputChange} />
                        <label htmlFor="ID" data-title="아이디"></label>
                    </div>

                    <div className="field">
                        <input type="password" id="PW" onChange={inputChange} />
                        <label htmlFor="PW" data-title="비밀번호" />
                        <br />
                        <button type='button' onClick={userOut}>회원탈퇴하기</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
