import KakaoLogin from "react-kakao-login";

const SocialLogin = ({ getKakaoLoginAccess }) => {
  const kakaoClientId = "636e15663d34807b5697edbf5735a3ad";
  const kakaoOnSuccess = async (data) => {
    console.log(data);
    getKakaoLoginAccess(data);
  };
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
  );
};

export default SocialLogin;

// const SocialKakao = ()=>{
//     const Rest_api_key='d10c73d13ede36f2676783e0b58ddd9a' //REST API KEY
//     const redirect_uri = 'http://localhost:3000' //Redirect URI
//     // oauth 요청 URL
//     const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=d10c73d13ede36f2676783e0b58ddd9a&redirect_uri=http://localhost:3000&response_type=code`
//     const handleLogin = ()=>{
//         window.location.href = kakaoURL
//     }
//     return(
//         <>
//             <button onClick={handleLogin}>
//                 카카오 로그인
//             </button>
//         </>
//     )
// }
// export default SocialKakao
