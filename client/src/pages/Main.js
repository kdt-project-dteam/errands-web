import React from 'react';
import '../css/main.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { asyncUpAxios, helperBoardSetter, wanterBoardSetter } from '../store/testCounter';
import { Link } from 'react-router-dom';

export default function Main() {
    const dispatch = useDispatch();
    // redux 로딩처리를 위한 변수
    const status = useSelector((state) => {
        return state.someReducer.status
    })
    // redux 에 저장된 게시판 json데이터 가져오기
    const value = useSelector(state => {
        return state.someReducer.value
    })
    const helperBoard = useSelector((state) => {
        return state.someReducer.helperBoard
    })
    const wanterBoard = useSelector((state) => {
        return state.someReducer.wanterBoard
    })
    // 구인구직 게시판 상태 [offer : 구인] , [search : 구직]
    const [boardState, setBoardState] = useState('offer');
    useEffect(() => {
        dispatch(asyncUpAxios())
        dispatch(helperBoardSetter())
        dispatch(wanterBoardSetter())
    }, [])
    return (
        <div className='main'>
            <div className='main-left'>
                <h2>
                    <div>모집🚗</div>
                    <div className='ft-08 card' >
                        <Link to={'/board'}> 전체 글</Link>
                    </div>
                </h2>
                <div className='main-card card'>
                    <ul>
                        {value ? value.map((data) => {
                            return (
                                <Link to={`/boardDetail/:${data.wanter_board_id}`}>
                                    <li className='card'>
                                        <div className='li-top'>
                                            <div className='li-top-title'>{data.wanter_board_id}</div>
                                            <div className='li-top-author'>{data.wanter_board_writer}</div>
                                        </div>
                                        <div className='li-bottom'>
                                            <div className='li-bottom-time'>
                                                {data.wanter_board_date}
                                            </div>
                                            <div className='li-bottom-hit'>
                                                {data.wanter_board_hit}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        }) : 'null'}
                    </ul>
                </div>
            </div>
            <div className='main-right'>
                <h2>
                    <div>급구!✈️</div>
                    <div className='ft-08 card' onClick={() => { setBoardState('offer') }}>
                        구인
                    </div>
                    <div className='ft-08 card' onClick={() => { setBoardState('search') }}>
                        구직
                    </div>
                </h2>
                <div className='sub-card card'>
                    <ul>
                        {boardState !== 'offer' ? helperBoard.map((data) => {
                            return (
                                <Link to={`/boardDetail/:${data.helper_board_id}`}>
                                    <li>
                                        <div className='li-top'>
                                            <div className='li-top-title'>{data.helper_board_title}</div>
                                            <div className='li-top-author'>{data.helper_board_writer}</div>
                                        </div>
                                        <div className='li-bottom'>
                                            <div className='li-bottom-time'>
                                                {data.helper_board_date}
                                            </div>
                                            <div className='li-bottom-hit'>
                                                {data.helper_board_hit}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        }) : ''}
                    </ul>
                </div>
                <h2>랭킹🥇</h2>
                <div className='sub-card card'>
                    <ul>
                        <li className='sub-card-rank'>
                            <div className='sub-card-rank-icon'>랭크</div>
                            <div className='sub-card-rank-name'>이름</div>
                            <div className='sub-card-rank-number'>횟수</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
