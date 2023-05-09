
import KakaoLogin from "react-kakao-login";

const SocialLogin = () => {
    const kakaoClientId = '1d7a27740708f0f2c4423af1652f080c'
    const kakaoOnSuccess = async (data) => {
        console.log(data)
        const idToken = data.response.id_token  // 인가코드 백엔드로 전달
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return (
        <>
            <KakaoLogin
                token={kakaoClientId}
                onSuccess={kakaoOnSuccess}
                onFail={kakaoOnFailure}
            />
        </>
    )
}

export default SocialLogin;
