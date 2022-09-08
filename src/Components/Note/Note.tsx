import React from 'react';
import "./Note.css";
import "react-quill/dist/quill.snow.css";

type propType = {
    folderName?: string,
    title: string,
    content: string
}

const Note = ({folderName, title, content}: propType) => {
    return(
        <div className='note-container'>
            <div className='title-container'>
                <button className='expand-btn'>
                    
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

            <div className='note-text-container'>
                {/* 당연히 overflow: scroll; */}
                <div className='note-text-scroll'>
                    <div dangerouslySetInnerHTML={{
                        __html: content
                    }}></div>
                </div>
            </div>


            <div className='title-container bottom'>
                <button className='expand-btn'>
                </button>
                {/* <input placeholder='태그 추가' className='title-text bottom-input' /> */}
            </div>
        </div>
    )
}


export default Note;