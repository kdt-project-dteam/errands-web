import React, { useState } from "react";
import "../css/header.scss";
import { Link } from "react-router-dom";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { newStore } from "../index.js";
import axios from "axios";

export default function Header() {
  const [displayToggle, setDisplayToggle] = useState("d-none");
  const dispatch = useDispatch();
  const mediaHeader = () => {
    if (displayToggle === "d-none") {
      setDisplayToggle("d-flex");
    } else if (displayToggle === "d-flex") {
      setDisplayToggle("d-none");
    }
  };
  return (
    <>
      <div className="header">
        <div className="w-80">
          <div className="header-logo">SIMVROONG</div>
          <div className="header-link">
            <Link to={"/main"}>Main</Link>
            <Link to={"/board"}>Board</Link>
            <Link to={"/members"}>Member</Link>
            {localStorage.getItem("userName") ? (
              <>
                <Link to={"/mypage"}>MyPage</Link>
                <a
                  href="/"
                  onClick={() => {
                    localStorage.clear();
                    axios({
                      method: "post",
                      url: `${process.env.REACT_APP_DB_HOST}/api/logout`,
                      withCredentials: true,
                    });
                  }}
                >
                  로그아웃
                </a>
              </>
            ) : (
              <>
                <Link to={"/login"}>로그인</Link>
                <Link to={"/signup"}>회원가입</Link>
              </>
            )}
          </div>
          <div className={`header-nav ${""}`}>
            {displayToggle === "d-none" ? (
              <FontAwesomeIcon icon={faBars} onClick={mediaHeader} />
            ) : (
              <FontAwesomeIcon icon={faX} onClick={mediaHeader} />
            )}
          </div>
        </div>
      </div>
      <div className={`burger-menu ${displayToggle}`}>
        <Link to={"/"}>Main</Link>
        <Link to={"/board"}>Board</Link>
        <Link to={"/members"}>Member</Link>
        {localStorage.getItem("userName") ? (
          <>
            <Link to={"/mypage"}>MyPage</Link>
            <a
              href="/"
              onClick={() => {
                localStorage.clear();
              }}
            >
              로그아웃
            </a>
          </>
        ) : (
          <>
            <Link to={"/login"}>로그인</Link>
            <Link to={"/signup"}>회원가입</Link>
          </>
        )}
      </div>
    </>
  );
}
