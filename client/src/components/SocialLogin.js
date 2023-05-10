
import KakaoLogin from "react-kakao-login";

const SocialLogin = ({ getKakaoLoginAccess }) => {
    const kakaoClientId = '1d7a27740708f0f2c4423af1652f080c'
    const kakaoOnSuccess = async (data) => {
        console.log(data)
        getKakaoLoginAccess(data);
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
