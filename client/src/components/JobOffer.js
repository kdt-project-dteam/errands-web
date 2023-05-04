import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BoardDetail from '../pages/BoardDetail';

export default function JobOffer() {
    return (<>
        <table className="board_items ">
                <colgroup>
                    <col width="13.4%"/>
                    <col width="60%"/>
                    <col width="13.3%"/>
                    <col width="13.3%"/>
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
                <tr className='board_son'>
                    <td>철수</td>
                    <Link to = "/pages/BoardDetail"><td className='son_title'>공덕역 배달이요~</td></Link>
                    <td>2023.05.04</td>
                    <td>13</td>
                </tr>
                {/* {getData.map((data)=>{
                    return (
                        <tr className='board_son'>
                        <td>{data.wanter_board_writer}</td>
                        <Link to = "/pages/BoardDetail"><td className='son_title'>{data.wanter_board_title}</td></Link>
                        <td>{data.wanter_board_date}</td>
                        <td>{data.wanter_board_hit}</td>
                    </tr>
                    )
                })} */}
               </tbody>            
           </table>
        </>)
}