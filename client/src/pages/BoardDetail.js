import React from 'react'
import '../css/boardDetail.scss'
export default function BoardDetail() {
    return (<>
        <div className='boardDetail_page'>
            <div className='boardDetail_page left'></div>
            <div className='boardDetail_page center'>
                <h1 className='Detail_page_Header'>구인 게시판</h1>
                <div className='writer_header_form'>
                    <span className='writer_header_form title'>공덕역 부탁이요</span>
                    <span className='writer_header_form date'>2023.05.05 16:44</span>
                </div>
                <section className='paragraph'>
                    <div className='user_paragraph'>
                        <p>가나다라마바사</p>
                        <p>가나다라마바사</p>
                        <p>가나다라마바사</p>
                        <p>가나다라마바사</p>
                        <p>가나다라마바사</p>
                    </div>
                </section>
                <div className='paragraph_ext'>
                    <button>좋아요</button>
                </div>
                <div className='comment'>
                    <h3>댓글 1</h3>
                    <div className='comment form'>
                        <fieldset>
                            <legend>댓글 쓰기</legend>
                            <div className='comment_write_form'>
                                <textarea className='comment_textarea'></textarea>
                                <div className='comment_submit_form'>
                                    <span className='comment_count'>0/100</span>
                                    <button type='submit' className='comment_submit'>등록</button>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className='comment_list'>
                        <ul className='comment_list_user'>
                            <li className='user_comment'>
                                <div className='user_comment_top'>
                                    <div>user_name</div>
                                    <div className='user_comment_form'>
                                        <div className='user_comment_date'>방금 전</div>
                                        <button className='user_comment_btn'>수정</button>
                                        <button className='user_comment_btn'>삭제</button>
                                    </div>
                                </div>
                                <div className='user_comment_text'>지금 갑니다</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='boardDetail_page right'></div>
        </div>
    </>)
}