import React, { useState } from 'react'
import '../css/boardDetail.scss'
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function BoardDetail() {
    const value = useSelector(state => {
        return state.someReducer.value
    })
    const helperAll = useSelector((state) => {
        return state.someReducer.helperAll
    })
    let data;
    const { boardId } = useParams();
    const { wanterHelper } = useParams();
    if (value && wanterHelper === 'wanter') {
        const result = value.filter((data) => data.wanter_board_id === Number(boardId));
        data = result;
    } else if (helperAll && wanterHelper === 'helper') {
        const result = helperAll.filter((data) => data.helper_board_id === Number(boardId));
        data = result
    }
    const [commentData, setCommentData] = useState('');
    const sendCommentData = async () => {
        const result = await axios({
            method: "POST",
            url: ""
        })
    }
    const inputChange = (e) => {
        setCommentData(e.target.value);
    }

    return (<>
        {data ? <div className='boardDetail_page'>
            <div className='boardDetail_page left'></div>
            <div className='boardDetail_page center'>
                <h1 className='Detail_page_Header'>구인 게시판</h1>
                <div className='writer_header_form'>
                    <span className='writer_header_form title'>{data[0].wanter_board_title}</span>
                    <span className='writer_header_form date'>{data[0].wanter_board_date}</span>
                </div>
                <section className='paragraph'>
                    <div className='user_paragraph'>
                        {data[0].wanter_board_content}
                    </div>
                </section>
                <div className='paragraph_ext'>
                    <button className='likes_btn'><AiOutlineHeart /></button>
                </div>
                <div className='comment'>
                    <h3>댓글 1</h3>
                    <div className='comment form'>
                        <fieldset>
                            <legend>댓글 쓰기</legend>
                            <div className='comment_write_form'>
                                <textarea className='comment_textarea' onChange={inputChange}></textarea>
                                <div className='comment_submit_form'>
                                    <span className='comment_count'>0/100</span>
                                    <button type='button' className='comment_submit'>등록</button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className='comment_list'>
                        <ul className='comment_list_user'>
                            <li className='user_comment'>
                                <div className='user_comment_top'>
                                    <div>{data[0].wanter_board_writer}</div>
                                    <div className='user_comment_form'>
                                        <div className='user_comment_date'>방금 전</div>
                                        <button type='button' className='user_comment_btn'>수정</button>
                                        <button type='button' className='user_comment_btn'>삭제</button>
                                    </div>
                                </div>
                                <div className='user_comment_text'>지금 갑니다</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='boardDetail_page right'></div>
        </div> : ""}

    </>)
}