import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function JobOffer({ data }) {
    console.log(data);
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
                {/* {data ? data.map((data) => {
                    return (
                        <tr className='board_son'>
                            <td>{data.helper_board_writer}</td>
                            <td className='son_title'><Link to={`/board/BoardDetail/helper/${data.helper_board_id}`}>{data.helper_board_title}</Link></td>
                            <td>{data.helper_board_date}</td>
                            <td>{data.helper_board_hit}</td>
                        </tr>
                    )
                }) : "null"} */}

            </tbody>
        </table>
    </>)
}