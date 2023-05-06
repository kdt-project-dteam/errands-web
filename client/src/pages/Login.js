import '../css/Login.scss';
// /api/login
const Login = () => {
    return (
        <>
            <div className="Login">
                <div className="background">
                    <div id="logo">LOGO</div>
                    <div className='w-80-setter'>
                        <div id="LOGIN">LOGIN</div>
                        <p>아이디</p>
                        <div id="input1">
                            <input type="text" id="ID" placeholder="ID" />
                        </div>
                        <p>비밀번호</p>
                        <div id="input2">
                            <input type="password" id="PW" placeholder="PASSWORD" />
                        </div>
                        <div id="button">
                            <button className='login-button'>로그인</button>
                            <div className='signup-checker'>계정이 없으신가요?</div>
                            <a href="http://localhost:3000/Signup" taget="_blank">
                                회원가입
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;