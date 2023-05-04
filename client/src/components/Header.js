import React from 'react'
import '../css/header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className='header'>
            <div className='header-logo'>LOGO</div>
            <div className='header-link'>
                <Link to={'/'}>Main</Link>
                <Link to={'/boardDetail'}>Board</Link>
                <Link to={'/members'}>MyPage</Link>
                <Link to={'/login'}>로그인</Link>
                <Link to={'/signup'}>회원가입</Link>
            </div>
            <div className='header-nav'>
                <ul>
                    <li><Link to={'/members'}>MyPage</Link></li>
                </ul>
            </div>
        </div>
    )
}
