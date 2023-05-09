import React, { useState } from 'react';
import '../css/header.scss';
import { Link } from 'react-router-dom';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    const [displayToggle, setDisplayToggle] = useState('d-none');
    const mediaHeader = () => {
        if (displayToggle === 'd-none') {
            setDisplayToggle('d-flex');
        } else if (displayToggle === 'd-flex') {
            setDisplayToggle('d-none');
        }
    };
    return (
        <>
            <div className="header">
                <div className="header-logo">LOGO</div>
                <div className="header-link">
                    <Link to={'/'}>Main</Link>
                    <Link to={'/board'}>Board</Link>
                    <Link to={'/members'}>Member</Link>
                    <Link to={'/mypage'}>MyPage</Link>
                    <Link to={'/login'}>로그인</Link>
                    <Link to={'/signup'}>회원가입</Link>
                </div>
                <div className={`header-nav ${''}`}>
                    {displayToggle === 'd-none' ? (
                        <FontAwesomeIcon icon={faBars} onClick={mediaHeader} />
                    ) : (
                        <FontAwesomeIcon icon={faX} onClick={mediaHeader} />
                    )}
                </div>
            </div>
            <div className={`burger-menu ${displayToggle}`}>
                <Link to={'/'}>Main</Link>
                <Link to={'/board'}>Board</Link>
                <Link to={'/members'}>Member</Link>
                <Link to={'/mypage'}>MyPage</Link>
                <Link to={'/login'}>로그인</Link>
                <Link to={'/signup'}>회원가입</Link>
            </div>
        </>
    );
}
