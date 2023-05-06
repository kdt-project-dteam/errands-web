import '../css/Signup.scss';
// /api/register
const SIGNUP = () => {
    return (
        <>
            <div className="Login">
                <div className="background">
                    <div id="logo">LOGO</div>
                    <div className='w-80-setter'>
                        <div id="LOGIN">SIGNUP</div>
                        <p>아이디</p>
                        <div id="input1">
                            <input type="text" id="ID" placeholder="ID" />
                        </div>
                        <p>비밀번호</p>
                        <div id="input2">
                            <input type="password" id="PW" placeholder="PASSWORD" />
                        </div>
                        <p>이름</p>
                        <div id="input2">
                            <input type="password" id="PW" placeholder="PASSWORD" />
                        </div>
                        <div className="input-group">
                            <div>
                                <input type="radio" value="W" id="wanter" name='typeChecker' />
                                <label for="wanter">구인자</label>
                            </div>
                            <div>
                                <input type="radio" value="H" id="helper" name='typeChecker' />
                                <label for="helper">구직자</label>
                            </div>
                        </div>
                        <div id="button">
                            <button className='login-button'>회원가입</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SIGNUP;
