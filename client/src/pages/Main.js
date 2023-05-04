import React from 'react';
import '../css/main.scss';
//import axios from 'axios';

export default function Main() {
    return (
        <div className="main">
            <div className="main-left">
                <h2>모집🚗</h2>
                <div className="main-card card">
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
            <div className="main-right">
                <h2>
                    <div>급구!✈️</div>
                    <div className="ft-08 card">구인</div>
                    <div className="ft-08 card">구직</div>
                </h2>
                <div className="sub-card card">
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
                <h2>랭킹🥇</h2>
                <div className="sub-card card">
                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
