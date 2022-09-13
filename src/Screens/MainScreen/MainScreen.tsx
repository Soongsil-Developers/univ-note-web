import React, { useEffect, useRef, useState } from "react";
import EmptyNote from "../../Components/EmptyNote/EmptyNote";
import Note from "../../Components/Note/Note";
import "./MainScreen.css";
import type { StyleT } from '../../Utils/Types';

const MainScreen = () => {
    const [noteContent, setNoteContent] = useState<string>();
    const screen = useRef<HTMLDivElement>();
    const [style, setStyle] = useState<StyleT>({
        style:{
            display: "",
            left: "",
            top: ""
        }
    });

    useEffect(()=>{
        if(window.localStorage.getItem('text')){
            setNoteContent(window.localStorage.getItem('text'));
        }
    }, []);

    const followMouse = (e: MouseEvent) => {
        const styleLT = {
            style:{
                display: 'none',
                left: `${e.clientX}px`,
                top: `${e.clientY}px`
            }
        }
        setStyle(styleLT);
    }
  
    useEffect(()=>{
        screen.current.addEventListener('mousemove', followMouse);
    }, []);

    /**
     * 문제 발견
     * 화면안에 두개 이상의 Quill을 배치 할 수 없다.
     * 그래도 이건 해결해 볼 수 있을 듯.
     */

    return(
        <div id="mainscreen-container" ref={screen}>
            <div className="scrollable">
                <EmptyNote style={style} screen={screen} />
                {/* <EmptyNote /> */}
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
                <Note content={noteContent} folderName="SSU DevCamp" title="헬로" />
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