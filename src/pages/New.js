import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Tab from '../components/Tab';
import productData from '../data/productData';
import { addItem, toggleWish } from './store';

export default function New() {
 
  const {rankCategory, products} = productData;
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wish);

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

  const totalCategory = [{id: 'all', label: '전체'}, ...rankCategory];
  const [showSubTab, setShowSubTab] = useState('all');
  const filteredProducts = showSubTab === 'all' ? [...products] : products.filter(product => product.category && product.category.includes(showSubTab));


  const [sortType, setSortType] = useState('new');
  const sortProducts = filteredProducts.sort((a, b) => {
    if(sortType === 'new'){ return new Date(b.date) - new Date(a.date);}
    if(sortType === 'sales'){return b.sales - a.sales;}
    if(sortType === 'highPrice') { return b.price - a.price;}
    if(sortType === 'lowPrice'){return a.price - b.price;}
    return 0;
  })

  const [moreCount, setMoreCount] = useState(24);
  const handleTabChange = (tabId) => {
    setShowSubTab(tabId);
    setMoreCount(18);
  };
  const displayedProducts = sortProducts.slice(0, moreCount);

  const triggerPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setPopupOpen(true);

    setTimeout(()=> {
      setPopupOpen(false);
    }, 3000);
  };

  const handleWishClick = (product) => {
    const isAlreadyWished = wishItems.some(item => item.id === product.id);

    dispatch(toggleWish({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      tags: product.tags
    }));

    if(isAlreadyWished) {
      triggerPopup('찜한 상품에서 제외되었습니다.', '');
    } else {
      triggerPopup('찜한 상품에 등록되었습니다.', 'wish');
    }
  };

  const handleCartClick = (product) => {
    dispatch(addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      count: 1
    }));
    triggerPopup('장바구니에 상품이 담겼습니다.', 'cart');
  };


  const Wrap = styled.div`
    width: 1280px;
    margin: 0 auto;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 48px;
    margin-top: 50px;
  `
  const TabWidth = styled.div`
    margin-bottom: 60px;
  `

  const FilterRow = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-bottom: 30px;   
  `
  const TotalCount = styled.div`
    font-size: 14px;
    font-weight: 400;
  `
  const SortButtons = styled.div`
    display: flex;
  `
  const SortBtn = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: ${(props) => props.$isActive ? '500' : '400'};
    color: ${(props) => props.$isActive ? '#161D24' : '#999'};
    transition: all 0.2s;

    ${(props) => !props.$isActive && `
      &:hover {
        color: #161D24;
        font-weight: 500;
      }
    `}             
    ${(props) => props.$isActive && `
      &:hover {
        color: #161D24;
        font-weight: 500;
      }
    `}
  `
  const Line = styled.div`
    color: #999;
    margin: 0 6px;
    font-size: 14px;
    font-weight: 300;
  `

  const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 40px 10px;
    margin-bottom: 100px;
  `
  const ProductCard = styled(Link)`
    text-decoration: none;
    color: #161D24;
  `
  const ImageBox = styled.div`
    margin-bottom: 10px;
    position: relative;
    border-radius: 3px;
  `
  const ImageBoxImg = styled.img`
    border-radius: 3px;
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
  const CartBtnImg = styled.img`
    width: 17px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
    opacity: 0.7;
    transition: all 0.2s;
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

    &:hover {
      color: #161D24;
      font-weight: 500;
      border: 1px solid #161D24;

      ${CartBtnImg} {
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
  const MoreBtnBox = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
  `
  const MoreBtn = styled.button`
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #666;
    border: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    // padding: 0 81px;
    width: 205px; height: 45px;
    text-align: center;
    line-height: 45px;
    border-radius: 3px;
    transition: all 0.2s;

    &:hover {
      background-color: #161D24;
      color: #fff;
      border: 1px solid #161D24;
    }
  `
  const slideUpPopup = keyframes`
    from {
      opacity: 0;
      transform: translate(-50%, -30%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  `
  const PopupOverlay = styled.div`
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100vh;
    background-color: rgba(22, 29, 36, 0.5);
    z-index: 999;
  `
  const PopupBox = styled.div`
    position: fixed;
    top: 50%; left: 50%;
    background-color: #fff;
    border-radius: 5px;
    width: 350px;
    padding: 40px 0;
    animation: ${slideUpPopup} 0.2s ease-out forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
  const PopupTxt = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 0;
  `
  const GoCartLink = styled(Link)`
    display: inline-block;
    font-size: 14px;
    text-decoration: none;
    border-radius: 50px;
    color: #fff;
    background-color: #161D24;
    padding: 5px 15px;
    margin-top: 15px;
    transition: all 0.2s;

    &:hover {
      background-color: #E60012;
      color: #fff;    
    }
  `
  

  return (
    <Wrap>
      <Title>신상품</Title>
      <TabWidth>
        <Tab
          data={totalCategory}
          activeTab={showSubTab}
          setActiveTab={handleTabChange}
        />
      </TabWidth>
      <FilterRow>
        <TotalCount>
          총 {sortProducts.length}건
        </TotalCount>
        <SortButtons>
          <SortBtn $isActive={sortType === 'new'} onClick={()=>{setSortType('new')}}>신상품순</SortBtn>
          <Line>ㅣ</Line>
          <SortBtn $isActive={sortType === 'sales'} onClick={()=>{setSortType('sales')}}>판매량순</SortBtn>
          <Line>ㅣ</Line>
          <SortBtn $isActive={sortType === 'highPrice'} onClick={()=>{setSortType('highPrice')}}>높은 가격순</SortBtn>
          <Line>ㅣ</Line>
          <SortBtn $isActive={sortType === 'lowPrice'} onClick={()=>{setSortType('lowPrice')}}>낮은 가격순</SortBtn>
        </SortButtons>
      </FilterRow>
      <ProductList>
        {displayedProducts.map((product)=>{
          const isRecent = (new Date() - new Date(product.date)) < (30 * 24 * 60 * 60 * 1000);
          const isWished = wishItems.some(item => item.id === product.id);
          return (
            <div key={product.id}>
              <ImageBox>
                <ProductCard to={`/product/${product.id}`} key={product.id}>
                    <ImageBoxImg src={product.image} alt={product.title} />
                </ProductCard>
                <WishBtn onClick={()=>handleWishClick(product)}>
                  <WishBtnImg src={isWished ? process.env.PUBLIC_URL + '/images/wishBtn-p.png' : process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                </WishBtn>
              </ImageBox>
              <CartBtn onClick={()=>handleCartClick(product)}>
                <CartBtnImg src={process.env.PUBLIC_URL + '/images/cartBtn.png'} alt='담기' />담기
              </CartBtn>
              <ProductCard to={`/product/${product.id}`}>
                <div>
                  <ProdTitle>{product.title}</ProdTitle>
                  <ProdPrice>
                    {product.price.toLocaleString()}원
                    {isRecent && <NewBadge>NEW</NewBadge>}
                  </ProdPrice>
                  <TagRow>
                    {product.tags && product.tags.map((tag, index)=> (
                      <TagNum key={index}>{tag}</TagNum>
                    ))}
                  </TagRow>
                </div>
              </ProductCard>
            </div>
          );
        })}
      </ProductList>
      <MoreBtnBox>
        {moreCount < sortProducts.length && (
          <MoreBtn onClick={()=>setMoreCount(prev => prev + 18)}>더보기</MoreBtn>
        )}
      </MoreBtnBox>
      {popupOpen && (
        <PopupOverlay  onClick={()=> setPopupOpen(false)}>
          <PopupBox onClick={(e)=>e.stopPropagation()}>
            <PopupTxt>{popupMessage}</PopupTxt>
            {popupType !== '' && (
              <GoCartLink to={popupType === 'cart' ? '/cart' : '/wish'} onClick={() => setPopupOpen(false)}>
                {popupType === 'cart' ? '장바구니 보러가기' : '찜한 상품 보러가기'}
              </GoCartLink>
            )}
          </PopupBox>
        </PopupOverlay>
      )}
    </Wrap>
  )
}
