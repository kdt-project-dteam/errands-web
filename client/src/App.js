import WritePage from "./pages/WritePage";
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
import NotFound from './pages/NotFound';
import AOS from "aos";
import "aos/dist/aos.css";

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
        AOS.init();
    }, []);
    return (
        <div>
            {window.location.pathname !== "/" ? <Header /> : null}
            <Routes>
                <Route path="/" element={<FirstPage />}></Route>
                <Route path="/main" element={<Main />}></Route>
                <Route path="/board" element={<Board />}></Route>
                <Route
                    path="/board/boardDetail/:wanterHelper/:boardId"
                    element={<BoardDetail />}
                ></Route>
                <Route path="/WritePage" element={<WritePage />}></Route>
                <Route path="/members" element={<Members />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/mypage/myImformation" element={<MyImformation />}></Route>
                <Route path="/mypage/myWrite" element={<MyWrite />}></Route>
                <Route path="/mypage/myComment" element={<MyComment />}></Route>
                <Route path="/mypage/withDraw" element={<WithDraw />}></Route>
                <Route path="/mypage/signO<ut" element={<SignOut />}></Route>
                <Route path="/*" element={<NotFound />} ></Route>
            </Routes>
        </div>
    );
}
