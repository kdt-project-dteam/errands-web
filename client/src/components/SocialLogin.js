
import KakaoLogin from "react-kakao-login";

const SocialLogin = ({ getKakaoLoginAccess }) => {
    const kakaoClientId = '636e15663d34807b5697edbf5735a3ad'
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
