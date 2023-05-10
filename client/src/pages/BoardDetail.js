import React, { useEffect, useState } from "react";
import "../css/boardDetail.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

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
        const result = await axios({
            method: "POST",
            url: `/api/wanter/${boardId}/comment`,
            data: {
                user_name: "테스트",
                wanter_comment_content: `${commentData}`,
            },
            withCredentials: true,
        });
        // console.log(result.data)
        setCommentList(
            commentList.concat({
                wanter_comment_board_id: result.data.wanter_comment_board_id,
                wanter_comment_content: result.data.wanter_comment_content,
                wanter_comment_id: result.data.wanter_comment_id,
                wanter_comment_writer: result.data.wanter_comment_writer,
                wanter_comment_date: nowTime,
            })
        );
    };
    const inputChange = (e) => {
        setCommentData(e.target.value);
    };

    const getCommentData = async () => {
        if (wanterHelper === 'wanter') {
            const result = await axios({
                method: "GET",
                url: `/api/wanter/${boardId}/comment`,
            });
            setCommentList(result.data);
            console.log(result);
        } else {
            const result = await axios({
                method: "GET",
                url: `/api/helper/${boardId}/comment`,
            });
            setCommentList(result.data);
            console.log(result);
        }

    };

    const updateComment = async (commentId) => {
        const result = await axios({
            method: "PATCH",
            url: `/api/wanter/${boardId}/comment/${commentId}`,
            withCredentials: true,
        });
        console.log(result);
    };

    const deleteComment = async (commentId) => {
        const result = await axios({
            method: "DELETE",
            url: `/api/wanter/${boardId}/comment/${commentId}`,
            withCredentials: true,
        });
        if (result.data === true) {
            alert('삭제되었습니다.');
        } else {
            alert(result.data);
        }
        getCommentData();
    };

    useEffect(() => {
        getCommentData();
    }, []);

    return (
        <>
            {wanterHelper === 'wanter' ? <div key={data.wanter_board_id} className="boardDetail_page">
                <div className="boardDetail_page left"></div>
                <div className="boardDetail_page center">
                    <h1 className="Detail_page_Header">구인 게시판</h1>
                    <div className="writer_header_form">
                        <span className="writer_header_form title">
                            {data[0].wanter_board_title}
                        </span>
                        <span className="writer_header_form date">
                            {data[0].wanter_board_date}
                        </span>
                    </div>
                    <section className="paragraph">
                        <div className="user_paragraph">
                            {data[0].wanter_board_content}
                        </div>
                    </section>
                    <div className="paragraph_ext">
                        <button className="likes_btn">
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
                                    ></textarea>
                                    <div className="comment_submit_form">
                                        <span className="comment_count">0/100</span>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                sendCommentData();
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
                                                    <div>{data.wanter_comment_writer}</div>
                                                    <div className="user_comment_form">
                                                        <div className="user_comment_date">
                                                            {data.wanter_comment_date}
                                                        </div>
                                                        <button
                                                            type="button"
                                                            className="user_comment_btn"
                                                            onClick={() => updateComment(data.wanter_comment_id)}
                                                        >
                                                            수정
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="user_comment_btn"
                                                            onClick={() => deleteComment(data.wanter_comment_id)}
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
                            : "null"}
                    </div>
                </div>
                <div className="boardDetail_page right"></div>
            </div> : <div key={data.helper_board_id} className="boardDetail_page">
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
                        <button className="likes_btn">
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
                                    ></textarea>
                                    <div className="comment_submit_form">
                                        <span className="comment_count">0/100</span>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                sendCommentData();
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
                                                            onClick={() => updateComment(data.helper_comment_id)}
                                                        >
                                                            수정
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="user_comment_btn"
                                                            onClick={() => deleteComment(data.helper_comment_id)}
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
            </div>}
        </>
    );
}
