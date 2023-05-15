import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div>
            <h1>404 NOT FOUND</h1>
            <h2>허용되지 않은 경로입니다</h2>
            <Link to={'/main'}>홈으로</Link>
        </div>
    )
}
