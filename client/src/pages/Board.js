import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import JobOffer from "../components/JobOffer";
import JobSeeker from "../components/JobSeeker"
import '../css/board.scss';
import { useSelector } from 'react-redux';

export default function Board() {
    const value = useSelector(state => {
        return state.someReducer.value
    })
    const helperAll = useSelector(state => {
        return state.someReducer.helperAll
    })
    const [menu, setMenu] = useState(1);
    const menuArr = [
        { id: 1, name: '구인' },
        { id: 2, name: '구직' }
    ]
    const [search, setSearch] = useState();
    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }

    return (<>
        <div className="board_page">
            <h1 className="board_page left">left</h1>
            <div className="board_page center">
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
                            <select>
                                <option value="title">제목</option>
                                <option value="writer">작성자</option>
                            </select>
                        </div>
                        <div className="category category_items input">
                            <input
                                placeholder="검색어를 입력하세요"
                                value={search}
                                onChange={onChangeSearch}
                            ></input>
                        </div>
                    </div>
                </div>
                {menu === 1 ?
                    <JobOffer data={value} /> : <JobSeeker data={helperAll} />
                }
            </div>
            <h1 className="board_page right">right</h1>
        </div>
    </>
    )
}

