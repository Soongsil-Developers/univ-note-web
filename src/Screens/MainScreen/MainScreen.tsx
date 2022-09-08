import React, { useEffect, useState } from "react";
import EmptyNote from "../../Components/EmptyNote/EmptyNote";
import Note from "../../Components/Note/Note";
import "./MainScreen.css";

const MainScreen = () => {
    const [noteContent, setNoteContent] = useState<string>();

    useEffect(()=>{
        if(window.localStorage.getItem('text')){
            setNoteContent(window.localStorage.getItem('text'));
        }
    }, []);

    /**
     * 문제 발견
     * 화면안에 두개 이상의 Quill을 배치 할 수 없다.
     * 그래도 이건 해결해 볼 수 있을 듯.
     */

    return(
        <div id="mainscreen-container">
            <div className="scrollable">
                <EmptyNote />
                {/* <EmptyNote /> */}
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
                {/* <Note content={noteContent} folderName="SSU DevCamp" title="헬로" /> */}
                {/* <Note content={noteContent} folderName="SSU DevCamp" title="헬로" /> */}
                {/* <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" /> */}
            </div>
        </div>
    )
}

export default MainScreen;