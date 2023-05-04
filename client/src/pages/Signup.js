import '../css/Signup.scss';
// /api/register
const SIGNUP = () => {
    return (
        <>
            <div>
                <div className="Signup">
                    <div className="background">
                        <div id="logo">로고창</div>
                        <div id="SIGNUP">
                            <div>SIGN UP</div>
                        </div>
                        <div id="id">
                            <label htmlfor="ID" />
                            <p>아이디</p>
                        </div>
                        <div id="input1">
                            <input type="text" id="ID" placeholder="ID" />
                        </div>
                        <div id="pw">
                            <label htmlfor="PW" />
                            <p>비밀번호</p>
                        </div>
                        <div id="input2">
                            <input type="password" id="PW" placeholder="PASSWORD" />
                        </div>
                        <div id="name">
                            <label htmlfor="NAME" />
                            <p>이름</p>
                        </div>
                        <div id="input3">
                            <input type="text" id="NAME" placeholder="NAME" />
                        </div>
                        <div className="input-group">
                            <div>
                                <input type="radio" value="W" id="wanter" />
                                <label for="wanter">구인자</label>
                            </div>
                            <div>
                                <input type="radio" value="H" id="helper" />
                                <label for="helper">구인자</label>
                            </div>
                        </div>

                        <div id="button">
                            <button>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SIGNUP;
