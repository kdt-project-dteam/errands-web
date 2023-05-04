import '../css/Login.scss';
// /api/login
const Login = () => {
    return (
        <>
            <div className="Login">
                <div className="background">
                    <div id="LOGIN">LOGIN</div>
                    <br />
                    <label htmlfor="ID" />
                    아이디
                    <br />
                    <div id="input1">
                        <input type="text" id="ID" placeholder="ID" />
                    </div>
                    <br />
                    <label htmlfor="PW" />
                    비밀번호
                    <br />
                    <div id="input2">
                        {' '}
                        <input type="password" id="PW" placeholder="PASSWORD" />
                    </div>
                    <br />
                    <div id="button">
                        <button>로그인</button>
                        <br />
                        <div>계정이 없으신가요?</div>
                        <div>회원가입</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
