import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import BoardDetail from "./pages/BoardDetail";
import Members from "./pages/Members";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyPage from "./pages/MyPage";
import FirstPage from "./pages/FirstPage";
import "./css/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MyImformation from "./pages/MyImformation";
import MyComment from "./pages/MyComment";
import MyWrite from "./pages/MyWrite";
import SignOut from "./pages/SignOut";
import WithDraw from "./pages/WithDraw";
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
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/board" element={<Board />}></Route>
                <Route path="/board/boardDetail/:wanterHelper/:boardId" element={<BoardDetail />}></Route>
                <Route path="/members" element={<Members />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/mypage/myImformation" element={<MyImformation />}></Route>
                <Route path="/mypage/myWrite" element={<MyWrite />}></Route>
                <Route path="/mypage/myComment" element={<MyComment />}></Route>
                <Route path="/mypage/withDraw" element={<WithDraw />}></Route>
                <Route path="/mypage/signOut" element={<SignOut />}></Route>
            </Routes>
        </div>
    );
}
