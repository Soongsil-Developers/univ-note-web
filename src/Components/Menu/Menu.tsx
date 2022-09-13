import React from 'react';
import './Menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAnglesLeft, 
    faMagnifyingGlass, 
    faPlus, 
    faCaretRight, 
    faStar, 
    faTag,
    faGear,
    faTrash
} from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    /**
     * 해당 컴포넌트는 다시 컴포넌트로 조각내어 정리할 생각입니다
     * 
     * css는 그냥 media query이용해서 반응형으로 만든다
     * ++ 그렇게 하면 너무 많은 노가다가 필요함 구글에 화면 비율에 따라
     * 비율 맞추는 공식이 있던데 참고할 것.
     */
    return(
        <div id='Menu-container'>

            {/* 공백 기준으로 컴포넌트 화 시켜 삽입 */}

            <div id='Icon-container'>
                <button id='back-button'>
                    <FontAwesomeIcon icon={faAnglesLeft} style={{
                        color: "#B4B4B4"
                    }} />
                </button>
            </div>

            <div id='profile-container-parent'>
                <div id='profile-container'>
                    <img id='profile-img' alt='프로필' src='data:image/jpeg;base64,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' />
                    <div id='profile-text-container'>
                        <div>
                            <span id='profile-title'>손범수</span>
                        </div>
                        <div>
                            <p id='profile-email'>sbs8239@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div id='search-input-container-parent'>
                <div id='search-input-container'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{
                        color: "#909090",
                        fontSize: 10
                    }} />
                    <input type={"search"} id='search-input' placeholder='검색' />
                </div>
            </div>

            <div id='directory-container-parent'>
                <div id='directory-container'>

                    <div id='directory-title'>
                        <h3 style={{
                            margin: 0
                        }}>폴더</h3>
                        <button id='directory-plus'>
                            <FontAwesomeIcon icon={faPlus} style={{
                                color: "#909090",
                                // fontSize: 10
                            }} />
                        </button>
                    </div>

                    <div id='directory-content'>
                        <div className='folder-button-container'>
                            <button className='folder-button'>
                                <FontAwesomeIcon className='folder-caret' icon={faCaretRight} />
                                <span className='folder-name'>2021</span>
                            </button>
                        </div>
                        <div className='folder-button-container'>
                            <button className='folder-button'>
                                <FontAwesomeIcon className='folder-caret' icon={faCaretRight} />
                                <span className='folder-name'>2020</span>
                            </button>
                        </div>
                        <div className='folder-button-container'>
                            <button className='folder-button'>
                                <FontAwesomeIcon className='folder-caret' icon={faCaretRight} />
                                <span className='folder-name'>2022</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div id='etc-container-parent'>
                <div id='etc-container'>
                    <div className='etc-button-container'>
                        <button className='etc-icon'>
                            <FontAwesomeIcon className='folder-caret' icon={faStar} style={{
                                padding: 0,
                                color: "#909090",
                                paddingRight: 7
                            }} />
                            <span className='etc-text'>중요 노트</span>
                        </button>
                    </div>

                    <div className='etc-button-container'>
                        <button className='etc-icon'>
                            <FontAwesomeIcon className='folder-caret' icon={faTag} style={{
                                padding: 2,
                                color: "#909090",
                                paddingRight: 9
                            }} />
                            <span className='etc-text'>태그</span>
                        </button>
                    </div>
                </div>
            </div>

            <div id='setting-and-trash-container'>
                <button id='setting-btn'>
                    <FontAwesomeIcon icon={faGear} style={{
                        color: "#909090",
                        fontSize: 16
                    }} />
                </button>
                <button id='trash-btn'>
                    <FontAwesomeIcon icon={faTrash} style={{
                        color: "#909090",
                        fontSize: 16
                    }} />
                </button>
            </div>
        </div>
    )
}


export default Menu;