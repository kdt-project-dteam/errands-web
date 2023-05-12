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

export default function WritePage({ data }) {
  const [initialDate, setInitialDate] = useState(moment().format("YYYY-MM-DD"));
  // wanter , helper
  const [address, setAddress] = useState("");

  // url : /api/${wanter,helper}
  // data : {}
  const [userid, setUserid] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [detailDate, setDetailDate] = useState("");

  const submitOffer = async (e) => {
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/api/wanter`,
      data: {
        wanter_board_title: title,
        wanter_board_content: content,
        wanter_board_dead_line: initialDate + detailAddress,
        wanter_board_place: address,
        wanter_board_place_detail: detailDate,
      },
    });

    // console.log("wanter title >>", title);
    // console.log("wanter content>>", content);
    // console.log("wanter date >>", initialDate + detailAddress);
    // console.log("wanter address>>", address);

    // alert("작성이 완료되었습니다!");
    // window.location.href = "/board";
  };

  const submitSeeker = async (e) => {
    const result = await axios({
      method: "post",
      url: `${process.env.REACT_APP_DB_HOST}/api/helper`,
      data: {
        helper_board_title: title,
        helper_board_content: content,
        helper_board_place: address,
        helper_board_place_detail: detailDate,
      },
    });

    // console.log("helper title >>", title);
    // console.log("helper content>>", content);
    // console.log("helper address>>", address);
    // alert("작성이 완료되었습니다!");
    // window.location.href = "/board";
  };

  return (
    <>
      <div className="WritePage">
        <div className="WritePage-Left"></div>
        <div className="WritePage-Center">
          <div className="Write_border_box">
            <div className="form-userid">
              <h5>작성자</h5>
              <input type="text" value={userid} className="userid_text"></input>
            </div>
            <div className="form-title">
              <h5 style={{ color: "black" }}>제목</h5>
              <input
                type="text"
                className="form-input"
                placeholder="제목을 입력하세요."
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-text">
              <h5>내용</h5>
              <textarea
                placeholder="내용을 입력하세요."
                className="form-textarea"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="form-address">
              <h5 className="address_name">주소</h5>
              <div className="address-form-child">
                <button className="form-address-btn">
                  <ModalAddress setAddress={setAddress} />
                </button>
                <input
                  type="text"
                  className="address_title"
                  style={{ margin: "20px", width: "400px" }}
                  value={address}
                ></input>
              </div>
            </div>
            <div className="detail_address">
              <input
                type="text"
                className="detail_address_text"
                placeholder="상세주소를 입력하세요. ex) **동 **호"
                value={detailAddress}
                onChange={(e) => {
                  setDetailAddress(e.target.value);
                }}
              ></input>
            </div>
            <div className="form-deadline">
              <h5>예약 시간</h5>
              <input
                type="date"
                className="form-date"
                value={initialDate}
                onChange={(e) => setInitialDate(e.target.value)}
              ></input>
            </div>
            <div className="detail_date">
              <h5>상세 시간</h5>
              <input
                type="text"
                className="detail_date_text"
                placeholder="상세시간을 입력하세요. ex) *시까지 부탁드립니다"
                value={detailDate}
                onChange={(e) => {
                  setDetailDate(e.target.value);
                }}
              ></input>
            </div>
            <div className="submit-form">
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
        <div className="WritePage-Right"></div>
      </div>
    </>
  );
}
