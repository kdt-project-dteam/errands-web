import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import BoardDetail from './pages/BoardDetail';
import Members from './pages/Members';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/boardDetail' element={<BoardDetail />}></Route>
        <Route path='/members' element={<Members />}></Route>
      </Routes>
    </div>
  );
}
