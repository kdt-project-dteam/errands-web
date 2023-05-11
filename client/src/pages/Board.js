import React from "react";
import { Link } from "react-router-dom";
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
    const [search, setSearch] = useState();
    const [info, setInfo] = useState([]);
    const [optionValue, setOptionValue] = useState();

    const searchText = () => {
        axios({
            method: "GET",
            url: `/api/search/${search}/${optionValue}`,
        }).then((res) => {
            console.log(res.data);
        });
    };

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const optionValueChange = (e) => {
        console.log(optionValue);
        setOptionValue(e.target.value);
    };

    return (<>
        <div className="board_page">
            <h1 className="board_page left"></h1>
            <div className="board_page center card">
                <h1>
                    구인/구직 게시판
                </h1>
                <h3>각종 심부름을 맡기거나 해결해주세요!</h3>
                <span className="option">

                    {menuArr.map(menu => {
                        return <button key={menu.id} className="option item card" onClick={() => setMenu(menu.id)}>{menu.name}</button>
                    })}
                    {/* <button className="option item card" onClick={() => setMenu(JobOffer)}>구인</button>
                    <button className="option item card" onClick={() => setMenu(JobSeeker)}>구직</button> */}
                </span>
                <div className="category card">
                    <div className="category category_items">
                        <div className="category category_items select">
                            <select onChange={optionValueChange}>
                                <option value="wanter_board_title">제목</option>
                                <option value="wanter_board_writer">작성자</option>
                                <option value="wanter_board_location">지역</option>
                            </select>
                        </div>
                        <div className="category category_items input">
                            <button type="button" onClick={searchText}>
                                <BiSearchAlt2 />
                            </button>
                            <input
                                type="text"
                                placeholder="검색어를 입력하세요"
                                value={search}
                                onChange={onChangeSearch}
                            />
                        </div>
                    </div>
                </div>
                {menu === 1 ? (
                    <JobOffer data={value} />
                ) : (
                    <JobSeeker data={helperAll} />
                )}
            </div>
            <h1 className="board_page right"></h1>
        </div>
    </>
    );
}
