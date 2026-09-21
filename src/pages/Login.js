import React, { lazy } from 'react';
import { useState, useRef, useEffect } from 'react';
//useRef : 새로고침되어도 값이 변하지 않고 유지되는 실제 객체 주소
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import userData from '../data/userData';

export default function Login() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [saveId, setSaveId] = useState(false);

  const idRef = useRef(null);
  const pwRef = useRef(null);
  // 아이디 인풋창의 실제 위치를 가리키는 고정 주소록

  const navigate = useNavigate();

  useEffect(()=> {
    //getItem : 값을 저장할때
    const savedId = localStorage.getItem('savedDaisoId');
    if(savedId) {
      setId(savedId);
      setSaveId(true);
    }
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matchUser = userData.find((user) => user.id === id && user.pw === pw);
    if(matchUser) {
      alert(`${matchUser.name}님, 환영합니다!`);
      
      if(saveId) {
        //setItem : 값을 읽어올때
        localStorage.setItem('savedDaisoId', id);
      } else {
        //removeItem : 값을 지울때
        localStorage.removeItem('savedDaisoId');
      }
      //sessionStorage : 일회용 메모장 창/탭 닫으면 지워짐
      sessionStorage.setItem('userName', matchUser.name);
      navigate('/');
    } else {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  };

  const Wrap = styled.div`
    width: 500px;
    margin: 120px auto 140px;
  `
  const LogoBox = styled(NavLink)`
    text-align: center;
    margin-bottom: 50px;
    text-decoration: none;
    color: #161D24;
    width: 172px;
    display: block;
    margin: 0 auto;
  `
  const LogoP = styled.p`
    font-size: 20px; 
    font-weight: 700;
    margin-bottom: 20px;
  `
  const LogoImg = styled.div`
    width: 172px;
    margin: 0 auto 50px;
  `
  const FormBox = styled.form`
    width: 100%;
  `
  const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border: 1px solid #eee;
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    box-sizing: border-box;
    border-radius: 3px;

    &::placeholder {
      color: #999;
    }
    &:focus {
      outline: none;
    }
  `
  const CheckBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0 20px;

    input[type='checkbox'] {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
    label {
      font-size: 14px;
      color: #999;
    }
  `
  const LoginBtn = styled.button`
    width: 100%;
    height: 50px;
    border-radius: 3px;
    background-color: #161D24;
    color: #fff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
    transition: all 0.2s;

    &:hover {
      background-color: #E60012;
    }
  `
  const SubMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    a {
      font-size: 14px;
      color: #999;
      font-weight: 400;
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: #161D24;
      }
    }
  `
  const Line = styled.div`
    color: #999;
    margin: 0 6px;
    font-size: 14px;
    font-weight: 300;
  `
  const SnsBtnBox = styled.div`
    display: grid;
    grid-column: column;
    gap: 10px;
  `
  const SnsBtn = styled.button`
    width: 100%;
    height: 50px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: all 0.2s;

    &:hover {
      opacity: 0.9;
    }

    .icon {
      width: 18px;
      font-size: 16px;
      color: #fff;
    }
  `
  const Kakao = styled(SnsBtn)`
    background-color: #F9E000;
    color: #161D24;
  `
  const Naver = styled(SnsBtn)`
    background-color: #00C300;
    color: #fff;
  `
  const Apple = styled(SnsBtn)`
    background-color: #161D24;
    color: #fff;
  `

  return (
    <Wrap>
      <LogoBox to='/'>
        <LogoP>온라인 국민가게</LogoP>
        <LogoImg><img src={process.env.PUBLIC_URL + '/images/login_logo.svg'} /></LogoImg>
      </LogoBox>
      <FormBox onSubmit={handleSubmit}>
        <Input type='text' placeholder='아이디를 입력해 주세요' value={id} ref={idRef} onChange={(e)=> {
          setId(e.target.value); 
          setTimeout(() => idRef.current?.focus(), 0);
        }} required/>
        <Input type='password' placeholder='비밀번호를 입력해 주세요' value={pw} ref={pwRef}
          onChange={(e) => {
            setPw(e.target.value);
            setTimeout(() => pwRef.current?.focus(), 0);
          }} required/>
        <CheckBox>
          <input type='checkbox' id='saveid' checked={saveId} onChange={(e)=>setSaveId(e.target.checked)} />
          <label htmlFor="saveId">아이디 저장</label>
        </CheckBox>
        <LoginBtn>로그인</LoginBtn>
        <SubMenu>
          <a href='/login'>회원가입</a>
          <Line>ㅣ</Line>
          <a href='/login'>아이디 찾기</a>
          <Line>ㅣ</Line>
          <a href='/login'>비밀번호 찾기</a>
        </SubMenu>
        <SnsBtnBox>
          <Kakao type='button'>
            <span className='icon'><img src={process.env.PUBLIC_URL + '/images/kakao.svg'} /></span>카카오 로그인
          </Kakao>
          <Naver provider='naver' type='button'>
            <span className='icon'><img src={process.env.PUBLIC_URL + '/images/naver.svg'} /></span>네이버 로그인
          </Naver>
          <Apple type='button'>
            <span className='icon'><img src={process.env.PUBLIC_URL + '/images/apple.svg'} /></span>Apple 로그인
          </Apple>
        </SnsBtnBox>
      </FormBox>
    </Wrap>
  )
}
