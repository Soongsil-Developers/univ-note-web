import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo, faCirclePlus, faFile, faTable } from "@fortawesome/free-solid-svg-icons";
import "./CustomToolBar.css";

// type propType = {
//     undo : () => void,
//     redo : () => void
// }

const CustomToolbar = () => {
    // 드롭다운 메뉴의 초기 display 값
    const [display, setDisplay] = useState<string>('none');

    /**
     * 버튼을 눌렀을 시 드롭다운을 펼치는 함수입니다
     * 
     * 문제 발생 : 키고 끄고가 꼭 삽입 버튼을 통해서 이뤄진다.
     * 다른 곳을 클릭해도 드롭다운이 안 사라지고 꼭 삽입 버튼을 다시 눌러야만 사라진다는 얘기
     * 이거는 좀 생각을 해보자
     */
    const changeDisplay = () => {
      if(display === 'none'){
        setDisplay('block');
      } else {
        setDisplay('none');
      }
    }

    return(
      <div id="toolbar">
        <div className='ql-btn-container'>
          <button className='ql-undo'>
                <FontAwesomeIcon icon={faUndo} style={{
                            color: "#B4B4B4",
                            opacity: 0.5
                }} />
          </button>
          <button className='ql-redo'>
                <FontAwesomeIcon icon={faRedo} style={{
                            color: "#B4B4B4",
                            opacity: 0.5
                }} />
          </button>
        </div>

        <select className='ql-header'>
          <option value={1}>제목</option>
          <option value={2}>소제목</option>
          <option value={3}>보통</option>
        </select>

        <select className="ql-color ">
          <option value="red"></option>
          <option value="orange"></option>
          <option value="green"></option>
          <option value="blue"></option>
          <option value="violet"></option>
          <option value="white"></option>
          <option selected></option>
        </select>
        <button className='ql-underline'></button>
        <button className="ql-bold "></button>
        <button className="ql-italic"></button>
        <select className="ql-background"></select>
        {/* 적은 텍스트를 하이퍼 링크화 시키는 버튼 <button className="ql-link"></button> */}
        <select className='ql-align'></select>

        <button className='ql-blockquote'></button>
        

        {/* 드롭다운 메뉴. 임시로 만든거라 매우 구림 */}
        <div className='ql-insertion'>      
          <div id="menu">
            <ul>
              <li>
                <button style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: 60
                }} onClick={changeDisplay}>
                    <FontAwesomeIcon
                    style={{
                      marginRight: 5
                    }}
                    icon={faCirclePlus} />
                    <span>삽입</span>
                </button>
                <ul style={{
                  display
                }}>
                  <li>
                    <button className="ql-image">
                    </button>
                    <span>이미지</span>
                    
                  </li>
                  <li>
                    <FontAwesomeIcon
                    style={{
                      marginLeft: 7,
                      marginRight: 7
                    }}
                    icon={faTable} />
                    <span>표</span>
                  </li>
                  <li>
                    <FontAwesomeIcon
                    style={{
                      marginLeft: 7,
                      marginRight: 10
                    }} icon={faFile}/>
                    <span>문서 불러오기</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CustomToolbar;