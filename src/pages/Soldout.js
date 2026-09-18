import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Tab from '../components/Tab';
import productData from '../data/productData';


export default function Soldout() {
 
  const {products} = productData;

  const [showSubTab, setShowSubTab] = useState('all');
  const filteredProducts = showSubTab === 'all' ? [...products] : products.filter(product => product.category && product.category.includes(showSubTab));

  const [sortType, setSortType] = useState('highinven');
  const soldoutProducts = products.filter(product => product.inventory !== undefined && product.inventory <= 5);

  const sortProducts = [...soldoutProducts].sort((a, b) => {
    if(sortType === 'income'){ return new Date(b.date) - new Date(a.date);}
    if(sortType === 'highinven'){return b.sales - a.sales;}
    if(sortType === 'lowinven') { return b.price - a.price;}
    return 0;
  })


  const [moreCount, setMoreCount] = useState(24);
  const displayedProducts = sortProducts.slice(0, moreCount);


  const Wrap = styled.div`
    width: 1280px;
    margin: 0 auto;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
    line-height: 48px;
    margin-top: 50px;
  `
  const SoldoutInfo = styled.p`
    font-size: 26px;
    font-weight: 600;
    line-height: 28px;
    margin-bottom: 30px;
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
    margin-bottom: 12px;
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
  const SoldoutTxt = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #E60012;
    line-height: 14px;
    margin-bottom: 0;
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

  return (
    <Wrap>
      <Title>품절임박</Title>
      <SoldoutInfo>재고 5개 이하 상품을 모았어요</SoldoutInfo>
      <FilterRow>
        <TotalCount>
          총 {sortProducts.length}건
        </TotalCount>
        <SortButtons>
          <SortBtn $isActive={sortType === 'income'} onClick={()=>{setSortType('income')}}>입고순</SortBtn>
          <Line>ㅣ</Line>
          <SortBtn $isActive={sortType === 'highinven'} onClick={()=>{setSortType('highinven')}}>재고많은순</SortBtn>
          <Line>ㅣ</Line>
          <SortBtn $isActive={sortType === 'lowinven'} onClick={()=>{setSortType('lowinven')}}>재고적은순</SortBtn>
        </SortButtons>
      </FilterRow>
      <ProductList>
        {displayedProducts.map((product)=>{
          const isRecent = (new Date() - new Date(product.date)) < (30 * 24 * 60 * 60 * 1000);
          return (
            <ProductCard to={`/product/${product.id}`} key={product.id}>
              <ImageBox>
                <ImageBoxImg src={product.image} alt={product.title} />
                <WishBtn onClick={(e)=>e.preventDefault()}>
                  <WishBtnImg src={process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                </WishBtn>
              </ImageBox>
              <CartBtn onClick={(e)=>e.preventDefault()}>
                <CartBtnImg src={process.env.PUBLIC_URL + '/images/cartBtn.png'} alt='담기' />담기
              </CartBtn>
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
                <SoldoutTxt>{product.inventory}개 남음</SoldoutTxt>
              </div>
            </ProductCard>
          );
        })}
      </ProductList>
      <MoreBtnBox>
        {moreCount < sortProducts.length && (
          <MoreBtn onClick={()=>setMoreCount(prev => prev + 18)}>더보기</MoreBtn>
        )}
      </MoreBtnBox>
    </Wrap>
  )
}
