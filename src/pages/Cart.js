import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, subCount, deleteMulti } from './store';

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';

export default function Cart() {

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [checkedIds, setCheckedIds] = useState([]);
  
  useEffect(()=> {
    if(cartItems.length > 0 && checkedIds.length === 0) {
      setCheckedIds(cartItems.map(item => item.id));
    }
  }, [cartItems]);

  const handleAllCheck = (checked) => {
    if(checked) {
      setCheckedIds(cartItems.map(item => item.id));
    } else {
      setCheckedIds([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if(checked) {
      setCheckedIds(prev => [...prev, id]);
    } else {
      setCheckedIds(prev => prev.filter(currentId => currentId !== id));
    }
  };

  const totalProductPrice = cartItems.reduce((sum, item) => {
    if(checkedIds.includes(item.id)) {
      return sum + ((item.price || 0) * (item.count || 0));
    } return sum;
  }, 0);

  const deliveryPrice = totalProductPrice >= 30000 || totalProductPrice === 0 ? 0 : 3000;
  const totalPayPrice = totalProductPrice + deliveryPrice;

  const handleSelectDelete = () => {
    if(checkedIds.length === 0) {
      alert('선택된 상품이 없습니다.');
       return;
    }
    if(window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      dispatch(deleteMulti(checkedIds));
      setCheckedIds([]);
    }
  }

  const handleOrder = () => {
    if(cartItems.length === 0) {
      alert('장바구니에 담긴 상품이 없습니다. 상품을 담아주세요.');
      return;
    }
    if(checkedIds.length === 0) {
      alert('주문하실 상품을 선택해 주세요.');
      return;
    }
    if(window.confirm(`총 ${checkedIds.length}개의 상품을 주문하시겠습니까?`)){
      alert('주문이 정상적으로 접수되었습니다! 감사합니다.');
    }
  };
  
  const Wrap = styled.div`
    width: 1280px;
    margin: 40px auto;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 80px;
    line-height: 48px;
    margin-top: 50px;
  `
  const CartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    width: 100%;
  `
  const CartBox = styled.div`
    display: block;
    width: 70%;
    margin-right: 30px;
  `
  const CartControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    label {
      display: flex;
      align-items: center;
      margin-bottom: 0;
      line-height: 14px;
      font-weight: 400;
      cursor: pointer;

      input {
        margin-right: 10px;      
        width: 16px; height: 16px;
        border-radius: 2px;
        border: 1px solid #ddd;
        cursor: pointer;
      }
    }
    .delete_btn {
      font-size: 14px;
      font-weight: 400;
      color: #999;
      transition: all 0.2s;
      &:hover { color: #161D24; }
    }
  `
  const TableBox = styled(Table)`
    
    tr {
      border: none;
      border-top: 1px solid #161D24;
      text-align: center;
      border-bottom: 1px solid #ddd;
      height: 36px;
      line-height: 36px;
    }
  
    th {
      border: none;
      margin-bottom: 0;
      color: #161D24;
      font-weight: 600;
      background-color: #f0f0f0;
    }
    td {
      border: none;
      vertical-align: middle;
      padding: 15px 10px;
    }
  `
  const InputBox = styled.div`
    display: flex;
    align-items: start;
    cursor: pointer;

    input {
      margin-right: 15px;
      width: 16px; height: 16px;
    }
  `
  const ItemFlex = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #161D24;

    img {
      width: 85px; height: 103px; 
      object-fit: cover;
      border-radius: 3px;
      margin-right: 15px;
    }
    span {
      font-size: 14px;
      font-weight: 400;
      color: #161D24;
    }
  `
  const ProductPrice = styled.div`
    font-size: 18px;
    font-weight: 600;
  `
  const BtnFlex = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    border: 1px solid #ddd;
    border-radius: 2px;
    background-color: #fff;
    color: #161D24;

    button {
      width: 33px;
      text-align: center;
      font-size: 16px;
     color: #161D24;
    }
    span {
      font-size: 14px;
      font-weight: 400;
    }
  `
  const TotalFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 18px;
      font-weight: 600;
    }
    button {
      border: none;
      background: none;
      width: 18px;
      opacity: 0.4;
      transition: all 0.2s;
      &:hover {opacity: 1;}
    }
  `
  const CartInfoBox = styled.div`
    width: 100%;
    background-color: #F4F4F4;
    border-radius: 3px;
    padding: 20px;

    div {
      font-size: 14px;
      font-weight: 600;
      color: #666;
      margin-bottom: 8px;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      color: #666;
      margin-bottom: 0;
    }
  `

  const PayBox = styled.div`
    width: 30%;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 30px 20px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 40px;

    .pay_flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;

      span {
        font-size: 16px;
        color: #666;
      }
      p {
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 600;
      }
    }

    .total_flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid #ddd;
      padding-top: 20px;
      margin-bottom: 20px;

      span {
        font-size: 18px;
        font-weight: 600;
      }
      p {
        margin-bottom: 0;
        font-size: 20px;
        font-weight: 600;
      }
    }
  `
  const PayTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  `
  const OrderBtn = styled.button`
    width: 100%; height: 45px;
    line-height: 45px;
    background-color: #161D24;
    border: 1px solid #161D24;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    transition: all 0.2s;
    &:hover {
      background-color: #fff;
      color: #161D24;
      border: 1px solid #161D24;
    }
  `


  return (
    <Wrap>
      <Title>장바구니</Title>
      <CartContainer>
        <CartBox>
          <CartControl>
            <label><input type='checkbox' onChange={(e) => handleAllCheck(e.target.checked)} checked={cartItems.length > 0 && checkedIds.length === cartItems.length} defaultChecked />전체선택</label>
            <button className='delete_btn' onClick={handleSelectDelete}>선택삭제</button>
          </CartControl>
          <TableBox>
            <thead>
              <tr>
                <th style={{width: '55%'}}>상품정보</th>
                <th style={{width: '15%'}}>상품금액</th>
                <th style={{width: '15%'}}>수량</th>
                <th style={{width: '15%'}}>총 금액</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan='4' style={{padding: '120px 0', textAlign: 'center', color: '#999'}}>장바구니에 담긴 상품이 없습니다.
                  </td>
                </tr>) : (
                cartItems.map((item) => {
                  const isChecked = checkedIds.includes(item.id);
                  return (
                    <tr key={item.id}>
                      <td>
                        <InputBox>
                          <input type='checkbox'  onChange={(e) =>handleSingleCheck(e.target.checked, item.id)} checked={isChecked} />
                          <ItemFlex to={`/product/${item.id}`}>
                            <img src={item.image} alt={item.title}/>
                            <span>{item.title}</span>
                          </ItemFlex>
                        </InputBox>
                      </td>
                      <td><ProductPrice>{item.price.toLocaleString()}원</ProductPrice></td>
                      <td>
                        <BtnFlex>
                          <button onClick={()=>dispatch(subCount(item.id))}>-</button>
                          <span>{item.count}</span>
                          <button onClick={()=>dispatch(addCount(item.id))}>+</button>
                        </BtnFlex>
                      </td>
                      <td>
                        <TotalFlex>
                          <span>{((item.price || 0) * (item.count || 0)).toLocaleString()}원</span>
                          <button onClick={()=> {if(window.confirm('선택한 상품을 삭제하시겠습니까?')) {
                            dispatch(deleteItem(item.id)); setCheckedIds(prev => prev.filter(currentId => currentId !== item.id));
                          }}}><img src={process.env.PUBLIC_URL + '/images/delete.png'} /></button>
                        </TotalFlex>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </TableBox>
          <CartInfoBox>
            <div>유의사항</div>
            <p>• 장바구니 보관 기간은 2개월이며, 100가지 종류의 상품을 담아두실 수 있습니다.</p>
            <p>• 한번에 최대 20가지 종류의 상품을 주문하실 수 있습니다.</p>
          </CartInfoBox>
        </CartBox>
        <PayBox>
          <PayTitle>결제 내역</PayTitle>
          <div className='pay_flex'>
            <span>총 상품 금액</span>
            <p>{totalProductPrice.toLocaleString()}원</p>
          </div>
          <div className='pay_flex'>
            <span>총 배송비</span>
            <p>{deliveryPrice.toLocaleString ()}원</p>
          </div>
          <div className='total_flex'>
            <span>총 결제금액</span>
            <p className='total_price'>{totalPayPrice.toLocaleString()}원</p>
          </div>
          <OrderBtn onClick={handleOrder}>주문하기</OrderBtn>
        </PayBox>
      </CartContainer>
    </Wrap>
  )
}
