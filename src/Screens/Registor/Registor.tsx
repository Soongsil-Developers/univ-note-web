import React, { useState } from 'react';
import axios from 'axios';
import { LoginContainer, LoginBox, LoginLogo, LoginInput, LoginBtn } from './RegistorStyle';
import { push } from '../../Utils/History';

const Registor = () => {
    const [id, setId] = useState<string>();
    const [pw, setPw] = useState<string>();
    const [userName, setUserName] = useState<string>();

    const sendIdPw = async () => {
        
        await axios.post('/auth/login', {
            id,
            pw,
            userName
        }, {
            headers: {
                Authorization : `bearer`
            }
        }).then((res: any) => {
            if(res.data){
                // 임시 방편으로 any. 나중에 타입 추적을 해서 제대로 끼워 넣자.
                console.log("res.data.token : " + res.data); // 토큰이 어떤 이름으로 담겨있는지 몰라 res.data만 적었어요
                localStorage.setItem('user', JSON.stringify(res.data)); // 토큰 저장
                axios.defaults.headers.common['Authorization'] = `bearer ${res.data}`; // axios 기본 헤더에 토큰 추가

                console.log("회원가입 성공!");
                push('/');
            }
        });
    }

    return(
        <LoginContainer>
            <LoginBox>
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <LoginLogo src='https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__340.png'></LoginLogo>
                    </div>
                    <div>
                        <LoginInput onChange={(e)=>setId(e.target.value)} placeholder='사용자 이메일' type={"email"} />
                    </div>
                    <div>
                        <LoginInput onChange={(e)=>setPw(e.target.value)} placeholder='비밀번호' type={"password"} />
                    </div>
                    <div>
                        <LoginInput onChange={(e)=>setUserName(e.target.value)} placeholder='사용자 이름' type={"text"} />
                    </div>
                    <div>
                        <LoginBtn onClick={() => sendIdPw()}>회원가입</LoginBtn>
                    </div>
                </div>
            </LoginBox>
        </LoginContainer>
    )
}

export default Registor;