import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function JobOffer({ data }) {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(10);

  // const [pageNumberLimit, setPageNumberLimit] = useState(5);
  // const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  // const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  // const handleClick = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };

  // const NextBtn = () => {
  //   setCurrentPage(currentPage + 1);

  //   if (currentPage + 1 > maxPageNumberLimit) {
  //     setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
  //     setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  //   }
  // };

  // const PrevBtn = () => {
  //   setCurrentPage(currentPage - 1);

  //   if ((currentPage - 1) % pageNumberLimit == 0) {
  //     setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
  //     setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
  //   }
  // };

  // const pages = [];
  // for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
  //   pages.push(i);
  // }

  // const indexOfLastItems = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItems - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItems);

  // const renderPageNumbers = pages.map((number) => {
  //   if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
  //     return (
  //       <li key={number} id={number} onClick={handleClick}>
  //         {number}
  //       </li>
  //     );
  //   } else {
  //     return "null";
  //   }
  // });

  return (
    <>
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
          {data
            ? data.map((currentItems) => {
              return (
                <tr className="board_son">
                  <td>{currentItems.wanter_board_writer}</td>
                  <td className="son_title">
                    <Link
                      to={`/board/BoardDetail/wanter/${currentItems.wanter_board_id}`}
                    >
                      {currentItems.wanter_board_title}
                    </Link>
                  </td>
                  <td>{currentItems.wanter_board_date}</td>
                  <td>{currentItems.wanter_board_hit}</td>
                </tr>
              );
            })
            : "null"}
        </tbody>
      </table>
      {/* <ul className="pagination">
        <li>
          <button
            onClick={PrevBtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            이전
          </button>
        </li>
        {renderPageNumbers}
        <li>
          <button
            onClick={NextBtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            다음
          </button>
        </li>
      </ul> */}
    </>
  );
}
