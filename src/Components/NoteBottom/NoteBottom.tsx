import React from 'react';
import "./NoteBottom.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from '@fortawesome/free-solid-svg-icons';

const NoteBottom = () => {
    return(
        <div className='title-container bottom'>
            <button className='expand-btn'>
                <FontAwesomeIcon icon={faTags} style={{
                            color: "#ACACAC",
                            // opacity: 0.5,
                            fontSize: 16
                }} />
            </button>
            <input placeholder='태그 추가' className='title-text bottom-input' />
        </div>
    )
}

export default NoteBottom;