import React from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/writePage.scss";
import "../components/SearchAddress";
import SearchPage from "./SearchPage";
import ModalAddress from "../components/ModalAddress";
import moment from "moment";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

export default function WritePage({ data }) {
  const [initialDate, setInitialDate] = useState(moment().format("YYYY-MM-DD"));
  // wanter , helper
  const [address, setAddress] = useState("");

  // url : /api/${wanter,helper}
  // data : {}
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [detailDate, setDetailDate] = useState("");

  const submitOffer = async (e) => {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/api/wanter`,
      data: {
        wanter_board_writer: localStorage.getItem("userName"),
        wanter_board_title: title,
        wanter_board_content: content,
        wanter_board_dead_line: initialDate + " " + detailDate,
        wanter_board_place: address,
        wanter_board_place_detail: detailAddress,
      },
      withCredentials: true,
    });

    if (title.trim().length == 0) {
      Swal.fire({
        icon: "error",
        title: "제목을 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (content.trim().length == 0) {
      Swal.fire({
        icon: "error",
        title: "내용을 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (address.trim().length == 0) {
      Swal.fire({
        icon: "error",
        title: "주소를 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "게시물이 작성되었습니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/board";
    }
  };

  const submitSeeker = async (e) => {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/api/helper`,
      data: {
        user_name: localStorage.getItem("userName"),
        helper_board_title: title,
        helper_board_content: content,
        helper_board_place: address,
        helper_board_date: initialDate + " " + detailDate,
      },
      withCredentials: true,
    });
    if (title.trim().length == 0) {
      Swal.fire({
        icon: "error",
        title: "제목을 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (content.trim().length == 0) {
      Swal.fire({
        icon: "error",
        title: "내용을 입력해주세요.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "게시물이 작성되었습니다.",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/board";
    }
  };

  return (
    <>
      <div className="WritePage">
        <div className="WritePage-Left"></div>
        <div className="WritePage-Center">
          <div className="Write_border_box card">
            <h1>⌨️게시글 작성⌨️</h1>
            <div className="write-form">
              <h5 className="address_name ml-0">작성자</h5>
              <input
                type="text"
                value={localStorage.getItem("userName")}
                className="form-input"
                style={{ backgroundColor: "rgb(205, 202, 202" }}
                disabled
              ></input>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0">제목</h5>
              <input
                type="text"
                className="form-input"
                placeholder="제목을 해주세요."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0">내용</h5>
              <textarea
                placeholder="내용을 입력해주세요."
                className="form-textarea"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0"> 주소</h5>
              <div className="address_form">
                <button className="form-address-btn">
                  <ModalAddress setAddress={setAddress} />
                </button>
                <input
                  type="text"
                  className="form-input"
                  value={address}
                ></input>
              </div>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0">상세주소</h5>
              <input
                type="text"
                className="form-input"
                placeholder="상세주소를 입력해주세요. ex) **동 **호"
                value={detailAddress}
                onChange={(e) => {
                  setDetailAddress(e.target.value);
                }}
              ></input>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0">예약시간</h5>
              <input
                type="date"
                className="form-input"
                value={initialDate}
                onChange={(e) => setInitialDate(e.target.value)}
              ></input>
            </div>
            <div className="write-form">
              <h5 className="address_name ml-0">상세시간</h5>
              <input
                type="text"
                className="form-input"
                placeholder="상세시간을 입력해주세요. ex) *시까지 부탁드립니다"
                value={detailDate}
                onChange={(e) => {
                  setDetailDate(e.target.value);
                }}
              ></input>
            </div>
            <div className="submit-form">
              <div className="btn_parent">
                <Button
                  variant="dark"
                  type="submit"
                  className="page-submit"
                  onClick={submitOffer}
                >
                  구인글 작성
                </Button>
                <Button
                  variant="dark"
                  type="submit"
                  className="page-submit"
                  onClick={submitSeeker}
                >
                  구직글 작성
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="WritePage-Right"></div>
      </div>
    </>
  );
}
