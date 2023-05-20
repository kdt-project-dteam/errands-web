import React from "react";
import { Link, useLinkClickHandler } from "react-router-dom";
import { useState, useEffect } from "react";
import JobOffer from "../components/JobOffer";
import JobSeeker from "../components/JobSeeker";
import "../css/board.scss";
import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Board() {
  //   useEffect(() => {
  //     localStorage.setItem("value", JSON.stringify(state.someReducer.value));
  //   }, []);

  // wanter 전체 게시물
  let value = useSelector((state) => {
    return state.someReducer.value;
  });
  // helper 전체 게시물
  let helperAll = useSelector((state) => {
    return state.someReducer.helperAll;
  });
  const [menu, setMenu] = useState(1);
  const menuArr = [
    { id: 1, name: "구인" },
    { id: 2, name: "구직" },
  ];
  const [boardType, setBoardType] = useState("wanter");

  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);
  const [optionValue, setOptionValue] = useState();
  const [filterData, setFilterData] = useState();

  const searchText = () => {
    if (menu == 1) {
      setBoardType("wanter");
    } else {
      setBoardType("helper");
    }
    axios({
      method: "GET",
      url: `${process.env.REACT_APP_DB_HOST}/wanter/search/${boardType}/${optionValue}`,
      params: { search: search },
      withCredentials: true,
    }).then((res) => {
      console.log(res.data);
      setFilterData(res.data);
    });
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const optionValueChange = (e) => {
    console.log(optionValue);
    setOptionValue(e.target.value);
  };

  const [currentState, setCurrentState] = useState("");

  const toggleActive = (e) => {
    setCurrentState(() => {
      return e.target.value;
    });
  };

  return (
    <>
      <div className="board_page">
        <h1 className="board_page left"></h1>
        <div className="board_page center card">
          <h1>구인/구직 게시판</h1>
          <h3>각종 심부름을 맡기거나 해결해주세요!</h3>
          <span className="option">
            {menuArr.map((menu, idx) => {
              return (
                <button
                  key={menu.id}
                  value={idx}
                  className={
                    "option item card " + (idx == currentState ? "change" : "")
                  }
                  onClick={(e) => {
                    setMenu(menu.id);
                    toggleActive(e);
                  }}
                >
                  {menu.name}
                </button>
              );
            })}

            {/* <button className="option item card" onClick={() => setMenu(JobOffer)}>구인</button>
                    <button className="option item card" onClick={() => setMenu(JobSeeker)}>구직</button> */}
          </span>
          <div className="category card">
            <Link to="/WritePage" className="go_write">
              <button className="writePage_btn">글 작성</button>
            </Link>
            <div className="category category_items">
              <div className="category category_items select">
                <select
                  onChange={optionValueChange}
                  className="category category_items select_form"
                >
                  {menu === 1 ? (
                    <>
                      <option value="none">선택해주세요</option>
                      <option value="wanter_board_title">제목</option>
                      <option value="wanter_board_writer">작성자</option>
                      <option value="wanter_board_place">지역</option>
                    </>
                  ) : (
                    <>
                      <option value="none">선택해주세요</option>
                      <option value="helper_board_title">제목</option>
                      <option value="helper_board_writer">작성자</option>
                      <option value="helper_board_place">지역</option>
                    </>
                  )}
                </select>
              </div>
              <label className="category category_items input">
                <button
                  type="button"
                  onClick={searchText}
                  className="search_btn"
                >
                  <BiSearchAlt2 />
                </button>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={search}
                  className="search_input"
                  onChange={onChangeSearch}
                />
              </label>
            </div>
          </div>
          {menu === 1 ? (
            <JobOffer data={value} filteredData={filterData} />
          ) : (
            <JobSeeker data={helperAll} filteredData={filterData} />
          )}
        </div>
        <h1 className="board_page right"></h1>
      </div>
    </>
  );
}
