import React from "react";
import "../css/main.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useRef } from "react";
import {
    asyncUpAxios,
    helperBoardSetter,
    wanterBoardSetter,
} from "../store/testCounter";
import { Link } from "react-router-dom";
import Loading from '../components/Loading';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lottie from 'react-lottie';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import LottieData from '../css/imgjson/bicycle.json';

export default function Main() {
    const dispatch = useDispatch();
    // redux 로딩처리를 위한 변수
    const status = useSelector((state) => {
        return state.someReducer.status;
    });
    // redux 에 저장된 게시판 json데이터 가져오기
    const value = useSelector((state) => {
        return state.someReducer.value;
    });
    const helperBoard = useSelector((state) => {
        return state.someReducer.helperBoard;
    });
    const wanterBoard = useSelector((state) => {
        return state.someReducer.wanterBoard;
    });
    const allUserData = useSelector((state) => {
        return state.someReducer.allUserData;
    });
    console.log('*************')
    console.log(value);
    console.log(typeof value);
    // 구인구직 게시판 상태 [offer : 구인] , [search : 구직]
    const [boardState, setBoardState] = useState("offer");
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
    return (
        <>
            <div className="main-banner">
                <div className='banner-left'>
                    <h2>SIMVROONG</h2>
                    <h3>근처의 이웃에게 요청하세요</h3>
                    <h3>이웃과 함께하는 다양한 심부름</h3>
                    <h3 className='h3-content'>우리동네 헬퍼에게</h3>
                    <h3 className='h3-content2'>심부름을 요청하세요</h3>
                    <h3 className='h3-content'>#심부름#헬프#도움#알바</h3>
                </div>
                <div className='banner-right'>
                    <Lottie
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                        className="lottie-item"
                    />
                </div>
            </div>
            <div className="main">
                <div className='main-1'>
                    <h2>모집🚗</h2>
                    <div className='swiper-section'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {value?.map((data, idx) => {
                                return (
                                    <SwiperSlide>
                                        <div key={idx} className='swiper-card card'>
                                            <p className='fs-16'>{data.wanter_board_title}</p>
                                            <p>{data.wanter_board_writer}</p>
                                            <div className='d-flex'>
                                                <p>주소 : ?</p>
                                                <p>수고비 : 20000원</p>
                                                <p>조회수 : {data.wanter_board_hit}</p>
                                                <p>작성일 : {data.wanter_board_date}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
                <div className='main-2'>
                    <h2>
                        <div>급구!✈️</div>
                        <div
                            className="ft-08 card"
                            onClick={() => {
                                setBoardState("offer");
                            }}
                        >
                            구인
                        </div>
                        <div
                            className="ft-08 card"
                            onClick={() => {
                                setBoardState("search");
                            }}
                        >
                            구직
                        </div>
                    </h2>
                    <div className='swiper-section'>
                        {/* <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {boardState === "offer" ? value?.wanterBoard.map((data, idx) => {
                                return (
                                    <SwiperSlide>
                                        <div className='swiper-card card'>
                                            <p className='fs-16'>{data.wanter_board_title}</p>
                                            <p>{data.wanter_board_writer}</p>
                                            <div className='d-flex'>
                                                <p>주소 : ?</p>
                                                <p>수고비 : 20000원</p>
                                                <p>조회수 : {data.wanter_board_hit}</p>
                                                <p>작성일 : {data.wanter_board_date}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }) : helperBoard?.map((data, idx) => {
                                return (
                                    <SwiperSlide>
                                        <div className='swiper-card card'>
                                            <p className='fs-16'>{data.helper_board_title}</p>
                                            <p>{data.helper_board_writer}</p>
                                            <div className='d-flex'>
                                                <p>주소 : ?</p>
                                                <p>수고비 : 20000원</p>
                                                <p>조회수 : {data.helper_board_hit}</p>
                                                <p>작성일 : {data.helper_board_date}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

                        </Swiper> */}
                    </div>
                </div>
                <div className='main-3'>
                    <h2>랭킹🥇</h2>
                    <div className='swiper-section'>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={4}
                            navigation
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >
                            {/* {allUserData ? allUserData.map((data, idx) => {
                                return (
                                    <SwiperSlide>
                                        <div className='swiper-card card'>
                                            <p className='fs-16'>{data.user_name}</p>
                                            <p>{data.user_id}</p>
                                            <div className='d-flex'>
                                                <p className='fs-16'><FontAwesomeIcon icon={faHeart} />{data.user_like}</p>
                                                <p>{data.user_type === 'W' ? 'wanter' : 'helper'}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }) : "null"} */}
                        </Swiper>
                    </div>
                </div>
                {/* <div className="main-left">
                    <h2>
                        <div>모집🚗</div>
                        <div className="ft-08 card">
                            <Link to={"/board"}> 전체 글</Link>
                        </div>
                    </h2>
                    <div className="main-card card">
                        <ul>
                            {value
                                ? value.map((data) => {
                                    return (
                                        <Link to={`/boardDetail/:${data.wanter_board_id}`}>
                                            <li className="card">
                                                <div className="li-top">
                                                    <div className="li-top-title">
                                                        {data.wanter_board_title}
                                                    </div>
                                                    <div className="li-top-author">
                                                        {data.wanter_board_writer}
                                                    </div>
                                                </div>
                                                <div className="li-bottom">
                                                    <div className="li-bottom-time">
                                                        {data.wanter_board_date}
                                                    </div>
                                                    <div className="li-bottom-hit">
                                                        {data.wanter_board_hit}
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    );
                                }).reverse()
                                : <Loading />}
                        </ul>
                    </div>
                </div>
                <div className="main-right">
                    <h2>
                        <div>급구!✈️</div>
                        <div
                            className="ft-08 card"
                            onClick={() => {
                                setBoardState("offer");
                            }}
                        >
                            구인
                        </div>
                        <div
                            className="ft-08 card"
                            onClick={() => {
                                setBoardState("search");
                            }}
                        >
                            구직
                        </div>
                    </h2>
                    <div className="sub-card card">
                        <ul>
                            {boardState !== "offer"
                                ? helperBoard.map((data) => {
                                    return (
                                        <Link to={`/boardDetail/:${data.helper_board_id}`}>
                                            <li key={data.helper_board_id}>
                                                <div className="li-top">
                                                    <div className="li-top-title">
                                                        {data.helper_board_title}
                                                    </div>
                                                    <div className="li-top-author">
                                                        {data.helper_board_writer}
                                                    </div>
                                                </div>
                                                <div className="li-bottom">
                                                    <div className="li-bottom-time">
                                                        {data.helper_board_date}
                                                    </div>
                                                    <div className="li-bottom-hit">
                                                        {data.helper_board_hit}
                                                    </div>
                                                </div>
                                            </li>
                                        </Link>
                                    );
                                })
                                : wanterBoard
                                    ? wanterBoard.map((data) => {
                                        return (
                                            <Link to={`/boardDetail/:${data.wanter_board_id}`}>
                                                <li key={data.wanter_board_id} className="card">
                                                    <div className="li-top">
                                                        <div className="li-top-title">
                                                            {data.wanter_board_id}
                                                        </div>
                                                        <div className="li-top-author">
                                                            {data.wanter_board_writer}
                                                        </div>
                                                    </div>
                                                    <div className="li-bottom">
                                                        <div className="li-bottom-time">
                                                            {data.wanter_board_date}
                                                        </div>
                                                        <div className="li-bottom-hit">
                                                            {data.wanter_board_hit}
                                                        </div>
                                                    </div>
                                                </li>
                                            </Link>
                                        );
                                    })
                                    : <Loading />}
                        </ul>
                    </div>
                    <h2>랭킹🥇</h2>
                    <div className="sub-card card">
                        <ul>
                            {allUserData
                                ? allUserData.map((data) => {
                                    return (
                                        <li className="sub-card-rank">
                                            <div className="sub-card-rank-icon">{data.user_id}</div>
                                            <div className="sub-card-rank-name">
                                                {data.user_name}
                                            </div>
                                            <div className="sub-card-rank-number">
                                                {data.user_like}
                                            </div>
                                        </li>
                                    );
                                })
                                : <Loading />}
                        </ul>
                    </div>
                </div> */}
            </div >
        </>
    );
}
