import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import BoardDetail from './pages/BoardDetail';
import Members from './pages/Members';
import Login from './pages/Login';
import Signup from './pages/Signup';

export default function App() {
  // main = 메인페이지
  // boardDetail = 게시글 상세보기
  // members = 마이페이지
  // login = 로그인페이지
  // signup = 회원가입
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/boardDetail' element={<BoardDetail />}></Route>
        <Route path='/members' element={<Members />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}
