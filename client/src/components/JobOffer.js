import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function JobOffer() {
    const dispatch = useDispatch();
    const value = useSelector(state => {
        return state.someReducer.value
    })
    return (<>
        <table className="board_items">
            <colgroup>
                <col width="13.4%" />
                <col width="60%" />
                <col width="13.3%" />
                <col width="13.3%" />
            </colgroup>
            <thead className='board_header'>
                <tr>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                {value ? value.map((data) => {
                    return (
                        <tr className='board_son'>
                            <td>{data.wanter_board_writer}</td>
                            <td className='son_title'><Link to="/board/BoardDetail">{data.wanter_board_title}</Link></td>
                            <td>{data.wanter_board_date}</td>
                            <td>{data.wanter_board_hit}</td>
                        </tr>
                    )
                }) : "null"}
            </tbody>
        </table>
    </>)
}