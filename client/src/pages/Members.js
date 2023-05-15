import React, { useState } from "react";
import "../css/member.scss";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from 'react-redux';
import MyVerticallyCenteredModal from '../components/MyVerticallyCenteredModal';
import Loading from '../components/Loading';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Members() {
    const allUserData = useSelector((state) => {
        return state.someReducer.allUserData;
    })
    const [modalShow, setModalShow] = useState(false);
    const [userData, setUserData] = useState();
    const userHitUp = async (userId) => {
        const result = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_DB_HOST}/api/user/${userId}/userLike`,
        })
        if (result.data) {
            Swal.fire({
                icon: "success",
                title: "추천 성공",
                showConfirmButton: false,
                timer: 500,
            });
            setTimeout(() => {
                window.location.href = '/members';
            }, 1000)

        }

    }
    return (
        <>
            <div className='Members'>
                <h1>유저 랭킹🥇</h1>
                <h3>전체 유저들의 랭킹을 여기서 확인하세요!</h3>
                <div className='rank-container card'>
                    {allUserData ? allUserData.map((data, idx) => {
                        return (
                            <div key={idx} className='user-data card'>
                                <div className='user-rank'>{idx + 1}</div>
                                <div className='user-name' onClick={() => {
                                    setModalShow(true)
                                    setUserData(data)
                                }}>{data.user_name}</div>
                                <div className='user-hits'>
                                    <div className='hits-icon' onClick={() => userHitUp(data.id)}><FontAwesomeIcon icon={faHeart} /></div>
                                    <div className='hits-count'>{data.user_like}</div>
                                </div>
                                <div className='user-type'>
                                    {data.user_type === 'W' ? 'WANTER' : 'HELPER'}
                                </div>
                            </div>
                        )
                    }) : <Loading />}
                </div>
                {/* <MyVerticallyCenteredModal show={modalShow} userData={userData} onHide={() => { setModalShow(false) }} /> */}
            </div>
            {/* <MyVerticallyCenteredModal
                show={modalShow}
                userData={userData}
                onHide={() => {
                    setModalShow(false);
                }}
            /> */}
        </>
    );
}