import React, { useEffect, useState } from "react";
import "../css/boardDetail.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";
import Loading from "../components/Loading";
import Swal from "sweetalert2";
import KakaoMap from "../components/KakaoMap";
export default function BoardDetail() {
  const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
  const value = useSelector((state) => {
    return state.someReducer.value;
  });
  const helperAll = useSelector((state) => {
    return state.someReducer.helperAll;
  });
  let data;
  const { boardId } = useParams();
  const { wanterHelper } = useParams();
  if (value && wanterHelper === "wanter") {
    const result = value.filter(
      (data) => data.wanter_board_id === Number(boardId)
    );
    data = result;
  } else if (helperAll && wanterHelper === "helper") {
    const result = helperAll.filter(
      (data) => data.helper_board_id === Number(boardId)
    );
    data = result;
  }

  const [commentData, setCommentData] = useState("");
  const [commentList, setCommentList] = useState([]);
  const sendCommentData = async () => {
    if (commentData.length > 0) {
      if (wanterHelper === "wanter") {
        const result = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/comment`,
          data: {
            wanter_comment_content: `${commentData}`,
          },
          withCredentials: true,
        });
        if (result.data == false) {
          console.log("로그인고");
        } else {
          setCommentList(
            commentList.concat({
              wanter_comment_board_id: result.data.wanter_comment_board_id,
              wanter_comment_content: result.data.wanter_comment_content,
              wanter_comment_id: result.data.wanter_comment_id,
              wanter_comment_writer: result.data.wanter_comment_writer,
              wanter_comment_date: nowTime,
            })
          );
        }
      } else if (wanterHelper == "helper") {
        const result = await axios({
          method: "POST",
          url: `${process.env.REACT_APP_DB_HOST}/helper/${boardId}/comment`,
          data: {
            helper_comment_content: `${commentData}`,
          },
          withCredentials: true,
        });
        if (result.data == false) {
          console.log("login go");
        } else {
          setCommentList(
            commentList.concat({
              helper_comment_board_id: result.data.helper_comment_board_id,
              helper_comment_content: result.data.helper_comment_content,
              helper_comment_id: result.data.helper_comment_id,
              helper_comment_writer: result.data.helper_comment_writer,
              helper_comment_date: nowTime,
            })
          );
          console.log(result);
        }
      }
    } else {
      console.log("not chat");
    }
  };
  const inputChange = (e) => {
    setCommentData(e.target.value);
  };

  const getCommentData = async () => {
    if (wanterHelper === "wanter") {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/comment`,
      });
      setCommentList(result.data);
      console.log(result);
    } else {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_DB_HOST}/helper/${boardId}/comment`,
      });
      setCommentList(result.data);
      console.log(result);
    }
  };

  const updateComment = async (commentId) => {
    const result = await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/comment/${commentId}`,
      withCredentials: true,
    });
    console.log(result);
  };

  const deleteComment = async (commentId) => {
    const result = await axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/comment/${commentId}`,
      withCredentials: true,
    });
    if (result.data === true) {
      Swal.fire({
        icon: "success",
        title: "삭제 완료",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `${result.data}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
    getCommentData();
  };

  const hitUp = async () => {
    if (wanterHelper == "wanter") {
      const result = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/hit`,
      });
      console.log(result);
    } else {
      const result = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_DB_HOST}/helper/${boardId}/hit`,
      });
      console.log(result);
    }
  };

  const deleteBoard = async () => {
    if (wanterHelper == "wanter") {
      const result = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}`,
      });
      console.log(result);
    } else {
      const result = await axios({
        method: "DELETE",
        url: `${process.env.REACT_APP_DB_HOST}/helper/${boardId}`,
      });
      console.log(result);
    }
  };

  const wanter_like = async () => {
    const result = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/like`,
      withCredentials: true,
    });
    console.log(result);
  };

  const helper_like = async () => {
    const result = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_DB_HOST}/wanter/${boardId}/like`,
      withCredentials: true,
    });
    console.log(result);
  };

  useEffect(() => {
    getCommentData();
    hitUp();
  }, []);

  return (
    <>
      {wanterHelper === "wanter" ? (
        data ? (
          <div key={data.wanter_board_id} className="boardDetail_page">
            <div className="boardDetail_page left"></div>
            <div className="boardDetail_page center">
              <h1 className="Detail_page_Header">구인 게시판</h1>
              <div className="writer_header_form">
                <span className="writer_header_form title">
                  {data[0].wanter_board_title}
                </span>
                <span className="writer_header_form date">
                  <span>{data[0].wanter_board_date}</span>
                  <span onClick={deleteBoard}>삭제</span>
                </span>
              </div>
              <section className="paragraph">
                <div className="user_paragraph">
                  {data[0].wanter_board_content}
                </div>
                <p>
                  주소 :{" "}
                  {data[0].wanter_board_place +
                    " " +
                    data[0].wanter_board_place_detail}
                </p>
                <p>마감기한 : {data[0].wanter_board_dead_line}</p>
              </section>
              <div className="paragraph_ext">
                <KakaoMap geoLocation={data[0].wanter_board_place} />
                <button className="likes_btn" onClick={wanter_like}>
                  <AiOutlineHeart />
                </button>
              </div>
              <div className="comment">
                <h3>댓글 {commentList.length}</h3>
                <div className="comment form">
                  <fieldset>
                    <legend>댓글 쓰기</legend>
                    <div className="comment_write_form">
                      <textarea
                        className="comment_textarea"
                        onChange={inputChange}
                        maxLength={200}
                        value={commentData}
                      ></textarea>
                      <div className="comment_submit_form">
                        <span className="comment_count">
                          {commentData.length}/200
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            commentData.trim().length == 0
                              ? Swal.fire({
                                  icon: "error",
                                  title: "한 글자 이상 입력하세요!",
                                  showConfirmButton: false,
                                  timer: 1500,
                                })
                              : sendCommentData() && setCommentData("");
                          }}
                          className="comment_submit"
                        >
                          등록
                        </button>
                      </div>
                    </div>
                  </fieldset>
                </div>
                {commentList ? (
                  commentList.map((data, idx) => {
                    return (
                      <div className="comment_list" key={idx}>
                        <ul className="comment_list_user">
                          <li className="user_comment">
                            <div className="user_comment_top">
                              <div>{data.wanter_comment_writer}</div>
                              <div className="user_comment_form">
                                <div className="user_comment_date">
                                  {data.wanter_comment_date}
                                </div>
                                <button
                                  type="button"
                                  className="user_comment_btn"
                                  onClick={() =>
                                    updateComment(data.wanter_comment_id)
                                  }
                                >
                                  수정
                                </button>
                                <button
                                  type="button"
                                  className="user_comment_btn"
                                  onClick={() =>
                                    deleteComment(data.wanter_comment_id)
                                  }
                                >
                                  삭제
                                </button>
                              </div>
                            </div>
                            <div className="user_comment_text">
                              {data.wanter_comment_content}
                            </div>
                          </li>
                        </ul>
                      </div>
                    );
                  })
                ) : (
                  <Loading />
                )}
              </div>
            </div>
            <div className="boardDetail_page right"></div>
          </div>
        ) : (
          <Loading />
        )
      ) : data ? (
        <div key={data.helper_board_id} className="boardDetail_page">
          <div className="boardDetail_page left"></div>
          <div className="boardDetail_page center">
            <h1 className="Detail_page_Header">구인 게시판</h1>
            <div className="writer_header_form">
              <span className="writer_header_form title">
                {data[0].helper_board_title}
              </span>
              <span className="writer_header_form date">
                {data[0].helper_board_date}
              </span>
            </div>
            <section className="paragraph">
              <div className="user_paragraph">
                {data[0].helper_board_content}
              </div>
            </section>
            <div className="paragraph_ext">
              <button className="likes_btn" onClick={helper_like}>
                <AiOutlineHeart />
              </button>
            </div>
            <div className="comment">
              <h3>댓글 {commentList.length}</h3>
              <div className="comment form">
                <fieldset>
                  <legend>댓글 쓰기</legend>
                  <div className="comment_write_form">
                    <textarea
                      className="comment_textarea"
                      onChange={inputChange}
                      maxLength={200}
                      value={commentData}
                    ></textarea>
                    <div className="comment_submit_form">
                      <span className="comment_count">
                        {commentData.length}/200
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          commentData.trim().length == 0
                            ? Swal.fire({
                                icon: "error",
                                title: "한 글자 이상 입력하세요!",
                                showConfirmButton: false,
                                timer: 1500,
                              })
                            : sendCommentData() && setCommentData("");
                        }}
                        className="comment_submit"
                      >
                        등록
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>
              {commentList
                ? commentList.map((data, idx) => {
                    return (
                      <div className="comment_list" key={idx}>
                        <ul className="comment_list_user">
                          <li className="user_comment">
                            <div className="user_comment_top">
                              <div>{data.helper_comment_writer}</div>
                              <div className="user_comment_form">
                                <div className="user_comment_date">
                                  {data.helper_comment_date}
                                </div>
                                <button
                                  type="button"
                                  className="user_comment_btn"
                                  onClick={() =>
                                    updateComment(data.helper_comment_id)
                                  }
                                >
                                  수정
                                </button>
                                <button
                                  type="button"
                                  className="user_comment_btn"
                                  onClick={() =>
                                    deleteComment(data.helper_comment_id)
                                  }
                                >
                                  삭제
                                </button>
                              </div>
                            </div>
                            <div className="user_comment_text">
                              {data.helper_comment_content}
                            </div>
                          </li>
                        </ul>
                      </div>
                    );
                  })
                : "null"}
            </div>
          </div>
          <div className="boardDetail_page right"></div>
        </div>
      ) : (
        "null"
      )}
    </>
  );
}
