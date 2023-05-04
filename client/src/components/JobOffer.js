import React from 'react'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

export default function JobOffer() {
    return (<>
        <Table striped bordered hover className="board_items">
               <thead>
                <tr>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </tr> 
               </thead>
               <tbody>
                <tr>
                    <td>철수</td>
                    <td>공덕역 배달이요~</td>
                    <td>2023.05.04</td>
                    <td>13</td>
                </tr>
               </tbody>            
           </Table>
        </>)
}