import { Routes, Route } from "react-router-dom";
import Board from "./pages/Board";
import Header from "./components/Header";
import "./css/index.scss";
import "./css/board.scss";
import Footer from "./components/Footer";
import OfferWritePage from "./pages/OfferWritePage";
import WritePage from "./pages/WritePage";
import SearchPage from "./pages/SearchPage";
export default function App3() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<WritePage />}></Route>
      </Routes>
    </div>
  );
}
