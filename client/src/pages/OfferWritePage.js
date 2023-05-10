import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/writePage.scss";
import "../components/SearchAddress";
import SearchPage from "./SearchPage";
import ModalAddress from "../components/ModalAddress";
import moment from "moment";
import Button from "react-bootstrap/Button";

export default function WritePage(props) {
  const [initialDate, setInitialDate] = useState(moment().format("YYYY-MM-DD"));
  // const [initialAddress, ]
  // wanter , helper

  // url : /api/${wanter,helper}
  // data : {}
  return (
    <>
      <div className="WritePage">
        <div className="WritePage-Left"></div>
        <div className="WritePage-Center">
          <div className="Write_border_box">
            <div className="form-userid">
              <h5>작성자</h5>
              <h6 className="write_userid">abcdefg</h6>
            </div>
            <div className="form-title">
              <h5 style={{ color: "black" }}>제목</h5>
              <input
                type="text"
                className="form-input"
                placeholder="제목을 입력하세요."
              ></input>
            </div>
            <div className="form-text">
              <h5>내용</h5>
              <textarea
                placeholder="내용을 입력하세요."
                className="form-textarea"
              ></textarea>
            </div>
            <div className="form-address">
              <h5 style={{ marginRight: "10px" }}>주소</h5>
              <div className="address-form-child">
                <button className="form-address-btn">
                  <ModalAddress />
                </button>
                <h6 className="address_title" style={{ margin: "20px" }}>
                  서울특별시 마포구 숭문 4길 56
                </h6>
              </div>
            </div>
            <div className="detail_address">
              <h5>상세주소</h5>
              <input
                type="text"
                className="detaill_address_text"
                placeholder="상세주소를 입력하세요. ex) **동 **호"
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
            <div className="submit-form">
              <Button variant="dark" type="submit" className="page-submit">
                글 작성
              </Button>
            </div>
          </div>
        </div>
        <div className="WritePage-Right"></div>
      </div>
    </>
  );
}
