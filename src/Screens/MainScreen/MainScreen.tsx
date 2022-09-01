import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import CustomToolbar from "./CustomToolBar/CustomToolBar";
import "react-quill/dist/quill.snow.css"
import "./MainScreen.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';

const MainScreen = () => {
    const [text, setText] = useState<string>();

    const handleText = (value: string) => {
        console.log(value);
        setText(value);
        window.localStorage.setItem('text', value);
    }

    useEffect(()=>{
        if(window.localStorage.getItem('text')){
            console.log(window.localStorage.getItem('text'));
            setText(window.localStorage.getItem('text'));
        }
    }, [])

    const modules = {
        toolbar: {
            container: "#toolbar"
        }
    }

    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',        
    ];

    return(
        <div id="mainscreen-container">
            <div className="document-container">
                {/* <button className="full-screen-button">
                    <FontAwesomeIcon className="full-screen-icon" icon={faUpRightAndDownLeftFromCenter} />
                </button> */}
                <CustomToolbar />
                <ReactQuill
                placeholder="제목없음"
                className="react-quill-content"
                modules={modules} 
                formats={formats} 
                theme="snow" 
                value={text}
                onChange={
                    (content, delta, source, editor) => handleText(editor.getHTML())} 
                />
            </div>
        </div>
    )
}

export default MainScreen;