import axios from "axios";
import { useState } from "react";

export default function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // main = 메인페이지
  // boardDetail = 게시글 상세보기
  // members = 마이페이지
  // login = 로그인페이지
  // signup = 회원가입
  const login = () => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/login",
      data: {
        user_id: id,
        user_pw: pw,
      },
    }).then((result) => {
      console.log(result);
    });
  };
  return (
    <div>
      <input
        type="text"
        name="user_id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        name="user_pw"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />
      {/* <input type="text" />
        <input type="text" /> */}
      <button onClick={login}>로그인</button>
    </div>
  );
}
