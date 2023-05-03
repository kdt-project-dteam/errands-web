import React from "react";
import { Link } from "react-router-dom";


export default function Board() {
    return (
    <div className="board_page">
        <h1 className="board_page left">left</h1>
        <div className="board_page center">
            <span/>
            <div className="options">
            <Link to = "#" className="option">option1</Link>
            <Link to = '#' className="option">option2</Link>
            </div>
            <span/>
        </div>
        <h1 className="board_page right">right</h1>
    </div>
    )
}

