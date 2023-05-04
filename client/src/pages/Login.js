import '../css/Login.scss';
// /api/login
const Login = () => {
    return (
        <>
            <div className="Login">
                <div className="background">
                    <div id="logo">로고창</div>
                    <div id="LOGIN">LOGIN</div>
                    <br />
                    <label className="ID" htmlfor="ID" />
                    <p>아이디</p>
                    <div id="input1">
                        <input type="text" id="ID" placeholder="ID" />
                    </div>
                    <label htmlfor="PW" />
                    <p>비밀번호</p>
                    <div id="input2">
                        <input type="password" id="PW" placeholder="PASSWORD" />
                    </div>
                    <div id="button">
                        <button>로그인</button>
                        <br />
                        <div>계정이 없으신가요?</div>
                        <a href="http://localhost:3000/Signup" taget="_blank">
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;