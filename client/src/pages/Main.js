import React from 'react';
import '../css/main.scss';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncUpAxios, asyncUpAxios2 } from '../store/testCounter';

export default function Main() {
    const dispatch = useDispatch();
    const status = useSelector((state) => {
        return state.someReducer.status
    })
    const value = useSelector(state => {
        return state.someReducer.value
    })
    useEffect(() => {
        dispatch(asyncUpAxios())
    }, [])
    return (
        <div className='main'>
            <div className='main-left'>
                <h2>
                    모집🚗
                </h2>
                <div className='main-card card'>
                    <ul>
                        {value ? value.map((data) => {
                            return (
                                <li>
                                    <div className='li-top'>
                                        <div className='li-top-title'>{data.email}</div>
                                        <div className='li-top-author'>{data.name}</div>
                                    </div>
                                    <div className='li-bottom'>
                                        <div className='li-bottom-time'>
                                            {data.email}
                                        </div>
                                        <div className='li-bottom-hit'>
                                            {data.postId}
                                        </div>
                                    </div>
                                </li>
                            )
                        }) : 'null'}
                    </ul>
                </div>
            </div>
            <div className='main-right'>
                <h2>
                    <div>급구!✈️</div>
                    <div className='ft-08 card'>
                        구인
                    </div>
                    <div className='ft-08 card'>
                        구직
                    </div>
                </h2>
                <div className='sub-card card'>
                    <ul>
                        <li>
                            <div className='li-top'>
                                <div className='li-top-title'>글제목이 들어갈 곳입니다.</div>
                                <div className='li-top-author'>작성자</div>
                            </div>
                            <div className='li-bottom'>
                                <div className='li-bottom-time'>
                                    시간이 들어갈 곳 입니다.
                                </div>
                                <div className='li-bottom-hit'>
                                    조회수
                                </div>
                            </div>
                        </li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
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
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
