import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { deleteWishItem, deleteMultiWishes } from './store';
import { addItem } from './store';

import { Link } from 'react-router-dom';

export default function Wish() {

  const wishItems = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const [checkedIds, setCheckedIds] = useState([]);
  
  useEffect(()=> {
    if(wishItems.length > 0 && checkedIds.length === 0) {
      setCheckedIds(wishItems.map(item => item.id));
    }
  }, [wishItems]);

  const handleAllCheck = (checked) => {
    if(checked) {
      setCheckedIds(wishItems.map(item => item.id));
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

  const handleSelectDelete = () => {
    if(checkedIds.length === 0) {
      alert('선택된 상품이 없습니다.');
       return;
    }
    if(window.confirm('선택한 상품을 삭제하시겠습니까?')) {
      dispatch(deleteMultiWishes(checkedIds));
      setCheckedIds([]);
    }
  }

  
  const Wrap = styled.div`
    width: 1280px;
    margin: 40px auto 120px;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 80px;
    line-height: 48px;
    margin-top: 50px;
  `
  const WishContainer = styled.div`
    width: 100%;
  `
  const WishControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;

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
  const NoWishes = styled.div`
    padding: 120px 0;
    color: #999;
    text-align: center;
  `
  const WishList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 40px 10px;
    width: 100%;
  `
  const ProductCard = styled.div`
    width: 100%;

    .info_link {
      text-decoration: none;
      color: #161D24;
    }
  `
  const ImgLink = styled(Link)`
    text-decoration: none;
    color: #161D24;
    position: relative;
    margin-bottom: 10px;
    display: block;
  `
  const ImgBox = styled.img`
    border-radius: 3px;
  `
  const CardCheck = styled.div`
    display: block;
    margin-bottom: 5px;

    input{
      width: 14px; height: 14px;
    }
  `
  const WishBtn = styled.button`
    position: absolute;
    bottom: 10px; right: 10px;
    background-color: rgba(22, 29, 36, 0.2);
    width: 36px; height: 36px;
    border-radius: 50px;
    transition: all 0.2s;

    &:hover {
      background-color: rgba(22, 29, 36, 0.5);
    }
  `
  const WishBtnImg = styled.img`
    width: 18px;
    display: inline-block;
  `
  const CartBtn = styled.button`
    width: 100%; height: 35px;
    line-height: 35px;
    border: 1px solid #ddd;
    font-size: 16px;
    color: #666;
    font-weight: 400;
    border-radius: 3px;
    margin-bottom: 10px;
    transition: all 0.2s;

    img {
      width: 17px;
      display: inline-block;
      vertical-align: middle;
      margin-right: 6px;
      opacity: 0.7;
      transition: all 0.2s;
    }
    &:hover {
      color: #161D24;
      font-weight: 500;
      border: 1px solid #161D24;

      img {
        opacity: 1;
      }
      
    }
  `
  const ProdTitle = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    line-height: 22px;
    height: 44px;
  `
  const ProdPrice = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
    line-height: 22px;
    display: flex;
    align-items: center;
  `
  const NewBadge = styled.span`
    background-color: #fff;
    border: 1px solid #E60012;
    box-sizing: border-box;
    margin-left: 10px;
    padding: 4px 6px;
    border-radius: 2px;
    color: #E60012;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 12px;
  `
  const TagRow = styled.div`
    display: flex;
  `
  const TagNum = styled.span`
    background-color: #eee;
    margin-right: 5px;
    padding: 4px 6px;
    border-radius: 2px;
    color: #666;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 12px;
  `


  return (
    <Wrap>
      <Title>찜한 상품</Title>
      <WishContainer>
        <WishControl>
          <label><input type='checkbox' onChange={(e) => handleAllCheck(e.target.checked)} checked={wishItems.length > 0 && checkedIds.length === wishItems.length} />전체선택</label>
          <button className='delete_btn' onClick={handleSelectDelete}>선택삭제</button>
        </WishControl>
        {wishItems.length === 0 ? (
          <NoWishes>찜한 상품이 없습니다.</NoWishes>
        ) : (
          <WishList>
            {wishItems.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              const isRecent = (new Date() - new Date(wishItems.date)) < (30 * 24 * 60 * 60 * 1000);
              return (
                <ProductCard key={item.id}>
                  <CardCheck>
                    <input type='checkbox' checked={isChecked} onChange={(e)=>handleSingleCheck(e.target.checked, item.id)}/>
                  </CardCheck>
                  <ImgLink to={`/product/${item.id}`}><ImgBox src={item.image} alt={item.title} />
                  <WishBtn onClick={(e)=>e.preventDefault()}>
                    <WishBtnImg src={process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                  </WishBtn></ImgLink>
                  <CartBtn onClick={()=> {
                    dispatch(addItem({id: item.id, title: item.title, price: item.price, image: item.image, count: 1}));
                    alert('장바구니에 상품이 담겼습니다.');
                  }}><img src={process.env.PUBLIC_URL + '/images/cartBtn.png'} alt='담기'/>담기</CartBtn>
                  <Link to={`/product/${item.id}`} className='info_link' >
                    <div>
                      <ProdTitle>{item.title}</ProdTitle>
                      <ProdPrice>
                        {item.price.toLocaleString()}원
                        {isRecent && <NewBadge>NEW</NewBadge>}
                        </ProdPrice>
                      <TagRow>
                        {item.tags && item.tags.map((tag, index) => (
                          <TagNum key={index}>{tag}</TagNum>
                        ))}
                      </TagRow>
                    </div>
                  </Link>
                </ProductCard>
              )
            })}
          </WishList>
        )
        } 
      </WishContainer>
    </Wrap>
  )
}
