import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import userData from '../data/userData';

export default function Login() {

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [saveId, setSaveId] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({id, pw, saveId });
  };

  const Wrap = styled.div`
    width: 500px;
    margin: 130px auto 150px;
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
    color: #999;
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
    gap: 15px;

    input[type='checkbox'] {
      width: 17px;
      height: 17px;
      border: 1px solid #ddd;
      border-radius: 2px;
      cursor: pointer;
    }
    label {
      font-size: 14px;
      color: #999;
    }
  `
  const LoginBtn = styled.button`
    width: 100%;
    heigth: 50px;
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

  return (
    <Wrap>
      <LogoBox to='/'>
        <LogoP>온라인 국민가게</LogoP>
        <LogoImg><img src={process.env.PUBLIC_URL + '/images/login_logo.svg'} /></LogoImg>
      </LogoBox>
      <FormBox onSubmit={handleSubmit}>
        <Input type='text' placeholder='아이디를 입력해 주세요' value={id} onChange={(e)=>setId(e.target.value)} required/>
        <Input type='password' placeholder='비밀번호를 입력해 주세요' value={pw} onChange={(e)=>setPw(e.target.value)} required />
        <CheckBox>
          <input type='checkbox' id='saveid' checked={saveId} onChange={(e)=>setSaveId(e.target.checked)}></input>
          <label htmlFor="saveId">아이디 저장</label>
        </CheckBox>
      </FormBox>
    </Wrap>
  )
}
