import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { useState } from "react";
import JobOffer from "../components/JobOffer";
import JobSeeker from "../components/JobSeeker"


export default function Board() {

      const [menu, setMenu] = useState();



    return (<>
        <h1 className="page_header">자유게시판</h1>
        <div className="board_page">
        <h1 className="board_page left">left</h1>
        <div className="board_page center">
            <span className="option">
            <button className="option" onClick={()=> setMenu(JobOffer)}>구인</button>
            <button className="option" onClick={()=> setMenu(JobSeeker)}>구직</button>
            </span>
            <div className="category">
                <div className="category category_items">
                    <div className="category category_items select">
                        <select>
                            <option value= "title">제목</option>
                            <option value= "writer">작성자</option>
                        </select>
                    </div>
                    <div className="category category_items input">
                        <input placeholder="검색어를 입력하세요"></input>
                    </div>
                </div>
            </div>
            <div children={menu}/>
        </div>
        <h1 className="board_page right">right</h1>
    </div>
    </>
    )
}

