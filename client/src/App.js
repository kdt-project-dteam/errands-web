import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import BoardDetail from "./pages/BoardDetail";
import Members from "./pages/Members";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./css/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Board from "./pages/Board";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  asyncUpAxios,
  helperBoardSetter,
  wanterBoardSetter,
  helperAll,
  allUserData,
} from "../src/store/testCounter";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // wanter all
    dispatch(asyncUpAxios());
    // helper all
    dispatch(helperAll());
    // helper 5
    dispatch(helperBoardSetter());
    // wanter 5
    dispatch(wanterBoardSetter());
    // user all
    dispatch(allUserData());
  }, []);
  // main = 메인페이지
  // board = 게시글
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
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route
          path="/board/boardDetail/:wanterHelper/:boardId"
          element={<BoardDetail />}
        ></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
