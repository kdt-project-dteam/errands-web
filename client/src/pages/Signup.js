import '../css/Signup.scss';
// /api/register
const Login = () => {
    return (
        <>
            <div>
                <div className="Signup">
                    <div className="background">
                        <div>SIGN UP</div>
                        <br />
                        <input type="text" id="ID" placeholder="ID" />
                        <br />

                        <input type="password" id="PW" placeholder="PASSWORD" />

                        <br />
                        <input type="text" id="NAME" placeholder="NAME" />
                        <br />
                        <label>
                            <input type="radio" value="W" />
                            구인자
                        </label>
                        <br />
                        <label>
                            <input type="radio" value="H" />
                            구직자
                        </label>

                        <br />
                        <button>회원가입</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
