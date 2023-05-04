import '../css/Login.scss';

const Login = () => {
    return (
        <>
            <div>
                <div className="background">
                    <div>LOGIN</div>
                    <br />
                    <input type="text" id="ID" placeholder="ID" />
                    <br />

                    <input type="password" id="PW" placeholder="PASSWORD" />

                    <br />
                    <button>로그인</button>
                    <br />
                    <button>회원가입</button>
                </div>
            </div>
        </>
    );
};

export default Login;
