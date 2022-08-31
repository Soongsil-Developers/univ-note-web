import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CustomToolbar = () => (
    <div id="toolbar">
      {/* <select className="ql-header">
        <option value="1">제목</option>
        <option value="2">부제목</option>
        <option value="6">보통</option>
      </select> */}
      {/*
      <select className='ql-size'>
        <option value="extra-small">매우 작게</option>
        <option value="small">작게</option>
        <option value="medium" selected>보통</option>
        <option value="large">크게</option>
      </select>
       */}
      <div className=''>
      </div>
      <button className=''>
            <FontAwesomeIcon icon={faChevronLeft} style={{
                        color: "#B4B4B4"
            }} />
      </button>
      <button className=''>
            <FontAwesomeIcon icon={faChevronRight} style={{
                        color: "#B4B4B4"
            }} />
      </button>
      <button className="ql-bold "></button>
      {/* <button className="ql-italic"></button> */}
      <button className='ql-underline'></button>
      <select className="ql-color ">
        <option value="red"></option>
        <option value="green"></option>
        <option value="blue"></option>
        <option value="orange"></option>
        <option value="violet"></option>
        <option value="#d0d1d2"></option>
        <option selected></option>
      </select>
      <select className="ql-background"></select>
      {/* <button className="ql-link"></button> */}
      <button className="ql-image"></button>
      <select className='ql-align'></select>
    </div>
);

export default CustomToolbar;