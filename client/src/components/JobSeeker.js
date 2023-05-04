import React from 'react'
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
                    <td>영희</td>
                    <td>대흥역 배달부탁드립니다 ㅠㅠㅠ</td>
                    <td>2023.05.04</td>
                    <td>2</td>
                </tr>
               </tbody>            
           </Table>
        </>)
}