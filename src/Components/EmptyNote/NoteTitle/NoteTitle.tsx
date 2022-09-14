import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
// faDownLeftAndUpRightToCenter
import "./NoteTitle.css";
type propType = {
    folderName?: string,
    title: string
}

const NoteTitle = ({folderName, title}: propType) => {
    return(
        <div className='title-container'>
            <button className='expand-btn'>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} style={{
                            color: "#B4B4B4",
                            opacity: 0.5,
                            fontSize: 14
                }} />
            </button>
            {folderName? 
            <>
                <span className='title-text folder-name'>{folderName}</span>
                <span className='title-text slash'>/</span>
            </> : 
            <span></span>
            }
            <span className='title-text title'>{title}</span>
        </div>
    )
}

export default NoteTitle;