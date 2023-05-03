import { Routes, Route } from 'react-router-dom';
import Board from './pages/Board';
import Header from './components/Header';
import './css/index.scss';
import './css/board.scss';

export default function App3() {
    return (
    <div>
        <Header/>
        <Routes>
            <Route path='/' element={<Board/>}></Route>
        </Routes>
    </div>
    )
}
