import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

export default function Pagination()  {

    const dispatch = useDispatch();
    const value1 = useSelector(state => {
        return state.someReducer.value1
    });
    console.log(value1);

    return (<>
    
    </>)
}


