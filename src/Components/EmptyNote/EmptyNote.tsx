import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactQuill from "react-quill";
import CustomToolbar from './CustomToolBar/CustomToolBar';
import "react-quill/dist/quill.snow.css";
import "./EmptyNote.css";
import NoteTitle from './NoteTitle/NoteTitle';
import NoteBottom from '../NoteBottom/NoteBottom';
import type { StyleT } from '../../Utils/Types';

const EmptyNote = ({screen}:any, {style}:StyleT) => {
    // 텍스트. 뭔가를 적을 때마다 html 태그가 string화 되어 이 변수로 들어갑니다.
    const [text, setText] = useState<string>();

    // ReactQuill의 참조. 일단 지금은 참조는 시켜놨지만 코드 내에서는 사용하는 곳이 없습니다.
    const rq = useRef<ReactQuill>();
    const rqContainer = useRef<HTMLDivElement>();

    /**
     * 텍스트를 뒤로가기 시키기 (CTRL + Z)
     * undo버튼을 누를시 사용할 함수입니다.
     */
    const undoText = () => {
        let myEditor = rq.current.getEditor();
        
        // 특정 키 커맨드에 binding되어 있는 함수를 버튼을 눌러도 사용하도록 시켰습니다.
        // 아래의 코드는 ctrl + Z 커맨드에 바인딩 되어있는 함수(undo)를 실행시킵니다.
        myEditor.getModule('history')['quill']['keyboard']['bindings']['90'][0]['handler']();
    }

    /**
     * 텍스트를 복구시키기 (CTRL + Y)
     * redo버튼을 누를시 사용할 함수입니다.
     */
    const redoText = () => {
        let myEditor = rq.current.getEditor();

        // 특정 키 커맨드에 binding되어 있는 함수를 버튼을 눌러도 사용하도록 시켰습니다.
        // 아래의 코드는 ctrl + Y 커맨드에 바인딩 되어있는 함수(redo)를 실행시킵니다.
        myEditor.getModule('history')['quill']['keyboard']['bindings']['89'][0]['handler']();
    }


    /**
     * quill 에서 사용할 모듈을 설정하는 코드.
     * 원하는 설정을 사용하면 되는데, 저는 툴바를 커스텀 해야해서 모듈에는
     * 크게 뭔가를 적진 않았습니다. 대신 container로 제가 만든 커스텀 툴바의 id값을 주어
     * 커스텀 툴바를 사용하도록 하였습니다.
     * 
     * useMemo는 어쩔 때 가끔 focusing이 풀려서 사용했습니다. useMemo의 최적화가
     * 해당문제를 도울 수 있다고 하네요. 정확히 어떻게 돕는다는 건지는 모르겠습니다.
     */
     const modules = useMemo(
        () => ({
            toolbar: {
                container: "#toolbar",
                handlers: {
                    'undo' : undoText,
                    'redo' : redoText
                }
            },
            // toolbar: toolbarOptions,
            history: {
                delay: 1000,
                maxStack: 100,
                userOnly: true
            }
        }), []
    );

    /**
     * quill에서 사용하는 포맷들의 배열
     */
    const formats = useMemo(() => (
        [
            //'font',
            // 'undo',
            // 'redo',
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image',
            'align', 'color', 'background',        
        ]
    ), []);


    /**  
    * 텍스트를 핸들링함. 지금은 localStorage에 임시로 저장시킴.
    * 현재는 단순하게 저장 구현만 대충 해보자해서 만든거라 키가 하나밖에 없어요
    * 백엔드 개발시 수정
    * 서버에 데이터를 보낼 때는 저장 트리거가 발동되었을 때만 데이터를 저장시키도록 할 것.
    */
    const handleText = (value: string) => {
        console.log(value);
        setText(value);
        window.localStorage.setItem('text', value);
    }

    // 처음에 렌더될 때 localStrage에 있는 데이터를 불러옴.
    useEffect(()=>{
        // localStrage에 저장된 텍스트를 가져옵니다
        if(window.localStorage.getItem('text')){
            console.log(window.localStorage.getItem('text'));
            setText(window.localStorage.getItem('text'));
        }
    }, []);

    return(
        <div>
            <CustomToolbar style={style} />
            <div className='quill-container'>
                <NoteTitle folderName={'SSU DevCamp'} title={'개쩌는 제목이란 무엇인가'} />
                <div ref={rqContainer}>
                    <ReactQuill
                    theme="snow" 
                    className="react-quill-content"
                    modules={modules} 
                    formats={formats} 
                    placeholder={"제목없음"}
                    value={text}
                    ref={rq}
                    onChange={
                        (content, delta, source, editor) => handleText(editor.getHTML())
                    }
                    style={{
                        padding: 10
                    }}
                    // onFocus={()=>setDisplayVal}
                    />
                    <NoteBottom />
                </div>
            </div>
        </div>
    )
}

export default EmptyNote;