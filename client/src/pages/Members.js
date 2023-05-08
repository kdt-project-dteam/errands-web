import React, { useState } from 'react'
import '../css/member.scss';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';

export default function Members() {
    const allUserData = useSelector((state) => {
        return state.someReducer.allUserData;
    })
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className='Members'>
            <h1>유저 랭킹🥇</h1>
            <h3>전체 유저들의 랭킹을 여기서 확인하세요!</h3>
            <div className='rank-container card'>
                {allUserData ? allUserData.map((data, idx) => {
                    return (
                        <div key={idx} className='user-data card'>
                            <div className='user-rank'>{data.id}</div>
                            <div className='user-name' onClick={() => setModalShow(true)}>{data.user_name}</div>
                            <div className='user-hits'>
                                <div className='hits-icon'><FontAwesomeIcon icon={faHeart} /></div>
                                <div className='hits-count'>{data.user_like}</div>
                            </div>
                            <div className='user-type'>
                                {data.user_type === 'W' ? 'WANTER' : 'HELPER'}
                            </div>
                        </div>
                    )
                }) : "null"}
            </div>
            <MyVerticallyCenteredModal show={modalShow} allUserData={allUserData} onHide={() => { setModalShow(false) }} />
        </div>
    )
}
