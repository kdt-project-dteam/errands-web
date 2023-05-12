import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
export default function JobSeeker({ data }) {
  // 40 / 10 = 4 반복문 1,2,3,4 버튼 -> 버튼 onclick 했을때 1번 보여주고 2번보여주고
  // 1 - 1~10
  // 2 - 11~20
  // 3 - 21~30
  // 4 - 31~40
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const NextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const PrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItems = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItems - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItems);
  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} id={number} onClick={handleClick}>
          {number}
        </li>
      );
    } else {
      return "null";
    }
  });
  return (
    <>
      {/* <table className="board_items">
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
                }) : "null"}
            </tbody>
        </table> */}
      <table className="board_items">
        <colgroup>
          <col width="13.4%" />
          <col width="60%" />
          <col width="13.3%" />
          <col width="13.3%" />
        </colgroup>
        <thead className="board_header">
          <tr>
            <th>작성자</th>
            <th>제목</th>
            <th>날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {currentItems ? (
            currentItems.map((currentItems) => {
              return (
                <tr className="board_son">
                  <td>{currentItems.helper_board_writer}</td>
                  <td className="son_title">
                    <Link
                      to={`/board/BoardDetail/helper/${currentItems.helper_board_id}`}
                    >
                      {currentItems.helper_board_title}
                    </Link>
                  </td>
                  <td>{currentItems.helper_board_date}</td>
                  <td>{currentItems.helper_board_hit}</td>
                </tr>
              );
            })
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <ul className="pagination">
        <li>
          <button
            onClick={PrevBtn}
            disabled={currentPage == pages[0] ? true : false}
            className="PaginationBtn"
          >
            이전
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button
            onClick={NextBtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
            className="PaginationBtn"
          >
            다음
          </button>
        </li>
      </ul>
    </>
  );
}
