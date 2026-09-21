import React from 'react';
import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import productData from '../data/productData';


const DeliveryOptions = [
  {id: '택배', icon: process.env.PUBLIC_URL + '/images/deliveryB_01.svg', activeIcon: process.env.PUBLIC_URL + '/images/deliveryW_01.svg', label: '택배배송', desc: '평일 3일 이내\n도착예정'},
  {id: '픽업', icon: process.env.PUBLIC_URL + '/images/deliveryB_02.svg', activeIcon: process.env.PUBLIC_URL + '/images/deliveryW_02.svg', label: '매장픽업', desc: '오늘\n픽업가능'},
  {id: '오늘', icon: process.env.PUBLIC_URL + '/images/deliveryB_03.svg', activeIcon: process.env.PUBLIC_URL + '/images/deliveryW_03.svg', label: '오늘배송', desc: '오늘\n도착예정'},
  {id: '대량', icon: process.env.PUBLIC_URL + '/images/deliveryB_04.svg', activeIcon: process.env.PUBLIC_URL + '/images/deliveryW_04.svg', label: '대량주문', desc: '평일 7일 이내\n도착예정'},
]

export default function ProductDetail() {

  const {id} = useParams();
  const navigate = useNavigate();

  const detailRef = useRef(null);
  const reviewRef = useRef(null);
  const deliveryRef = useRef(null);
  
  const product = productData.products?.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(product?.mainImg || '');
  const [deliveryType, setDeliveryType] = useState('택배');
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [sortBy, setSortBy] = useState('recent');
  const [nowPage, setNowPage] = useState(1);
  const reviewPerPage = 5;
  
  if(!product) return <div>상품을 찾을 수 없습니다.</div>;

  const isRecent = (new Date() - new Date(product.date)) < (30 * 24 * 60 * 60 * 1000);
  
  const handleQuantity = (type) => {
    if(type === 'plus')setQuantity(q=> q + 1);
    if(type === 'minus')setQuantity(q=> Math.max(1, q-1));
  };

  const handleAddToCart = () => {
    if(window.confirm('장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?')) {
      navigate('/cart');
    }
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 40,
      behavior: 'smooth',
    });
  };

  const allReviewImages = product.reviews ? product.reviews.reduce((acc, review) => {
    if(review.reviewImgs && review .reviewImgs.length > 0) {
      return [...acc, ...review.reviewImgs];
    }
    return acc;
  }, []) : [];

  const previewImages = allReviewImages.slice(0, 5);

  const sortedReviews = product.reviews ? [...product.reviews].sort((a,b) => {
    if(sortBy === 'recent') {
      return new Date(b.date) - new Date(a.date);
    }
    if(sortBy === 'highRating'){
      return b.rating - a.rating;
    }
    if(sortBy === 'lowRating'){
      return a.rating - b.rating;
    }
    return 0;
  }) : [];

  const maskUserId = (userId) => {
    if(!userId) return '';
    if(userId.length <= 3) return userId + '****';
    return userId.slice(0, 3) + '****';
  }
  
  const Wrap = styled.div`
    width: 1280px;
    margin: 40px auto;
  `
  const DetailBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    width: 100%;
  `
  const LeftContainer = styled.div`
    display: block;
    width: 50%;
  `
  const LeftImgBox = styled.div`
    display: flex;
    margin-bottom: 160px;
  `
  const SubImgList = styled.div`
    display: block; 
    margin-right: 10px;
  `
  const SubImg = styled.img`
    width: 61px;
    margin-bottom: 10px;
    border-radius: 3px;
  `
  const MainImg = styled.img`
    width: 100%; height: 600px;
    border-radius: 6px;
  `  
  const TabMenu = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccc;
    margin-bottom: 30px;
    margin-top: 120px;
  `
  const TabBtn = styled.button`
    flex-grow: 1;
    padding: 20px 0;
    background: none;
    border: none;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
    color: #999;
    transition: all 0.2s;

    &:hover {
      color: #161D24;
      font-weight: 600;
    }
  `
  const LeftBotContent = styled.div`
    width: 100%;
  `
  const InfoBox = styled.div`
    width: 100%;
    margin-bottom: 100px;
  `
  const DetailImageBox = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out;
    max-height: ${(props) => props.$isOpen ? '20000px' : '1030px'};
  `
  const DetailMainImg = styled.img`
    width: 100%; height: auto;
  `
  const BlurBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; height: 200px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  `
  const MoreBtn = styled.button`
    width: 70%; height: 48px;
    background: #fff;
    border: 1px solid #999;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    color: #666;
    text-align: center;
    line-height: 48px;
    display: block;
    margin: 0 auto;
    transition: all 0.2s;

    &:hover {
      background-color: #161D24;
      border: 1px solid #161D24;
      color: #fff;
    }
  `

  const InfoTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid #161D24;
    padding-bottom: 15px;
  `
  const PhotoReviewBox = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin-bottom: 30px;
  `
  const PhotoCard = styled.div`
    position: relative;
    flex-grow: 1;
    overflow: hidden;

    img {
      width: 100%; height: auto;
      object-fit: cover;
      border-radius: 5px;
    }
  `
  const MoreImg = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(22, 29, 36, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 500;
    }
  `
  const ReviewFilter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total_count {
      font-size: 14px;
      font-weight: 400;
      color: #161D24;
    }
  `
  const FilterList = styled.div`
    display: flex;
    font-size: 14px;
    color: #999;

    div{ margin: 0 6px; }

    span {
      cursor: pointer;
      &.active {
        color: #161D24;
        font-weight: 500;
      }
      &:hover {
        color: #161D24;
        font-weight: 500;
      }
    }
  `

  const ReviewList = styled.div`
    display: flex;
    flex-direction: column;
  `
  const ReviewItem = styled.div`
    border-bottom: 1px solid #ddd;
    padding: 30px 0;
  `
  const ReviewTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  `
  const UserFlex = styled.div`
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      color: #666;
      margin-left: 15px;
    }
  `
  const UserRating = styled.div`
    color: #161D24;
    font-size: 14px;
    font-weight: 600;
  `
  const ReviewDate = styled.div`
    font-size: 12px;
    color: #999;
  `
  const ReviewContent = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 20px;
  `
  const ReviewImgList = styled.div`
    display: flex;
    gap: 5px;
  `
  const ReviewImg = styled.img`
    width: 100px; height: 100px;
    border-radius: 3px;
    object-fit: cover;
  `
  const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 30px;
    padding: 20px 0;
  `;

  const PageBtn = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    color: #aaa;
    cursor: pointer;
    
    &:disabled {
      cursor: not-allowed;
      opacity: 0.3;
    }
  `;

  const PageNumBtn = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s ease;
    
    color: ${props => props.$isActive ? '#da1a22' : '#888'};
    font-weight: ${props => props.$isActive ? 'bold' : '500'};

    &:hover {
      color: #111;
    }
  `;


  const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    position: sticky;
    top: 40px;
  `
  const TagList = styled.div`
    display: flex;
    margin-bottom: 20px;
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
  const ProdTitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    margin-bottom: 15px;
  `
  const ProdPrice = styled.p`
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
  `
  const NewBadge = styled.span`
    background-color: #fff;
    border: 1px solid #E60012;
    box-sizing: border-box;
    margin-left: 10px;
    padding: 5px 6px;
    border-radius: 2px;
    color: #E60012;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 12px;
  `
  const DeliveryBox = styled.div`
    display: block;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  `
  const PTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  `
  const DeliveryCardBox = styled.div`
    // display: flex;
    // justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    margin-bottom: 20px;
  `
  const DeliveryCard = styled.div`
    // width: calc((100% - 30px)/4);
    width: 100%;
    text-align: center; 
    background-color: #F6F6F6;
    border-radius: 3px;
    padding: 13px 0;
    transition: all 0.2s;
    cursor: pointer;

    span {
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    img {
      width: 24px;
      margin: 0 auto 5px;
      transition: all 0.2s;
    }
    p {
      color: rgba(22, 29, 36, 0.8);
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 0;
      white-space: pre-line;
      transition: all 0.2s;

      ${(props)=> props.$isActive && `
        color: #fff;
      `}
    }
    &:hover {
      background-color: #161D24;
      color: #fff;
      p {color: #fff;}
      img {filter: brightness(0) invert(1);}
    }
    ${(props)=> props.$isActive && `
      background-color: #161D24;
      color: #fff;
      img {filter: brightness(0) invert(1);}
    `}
  `
  const DeliveryInfoBox = styled.div`
    display: flex;
    span {
      font-size: 14px;
      color: #999;
      margin-bottom: 0;
      margin-right: 30px;
    }
  `
  const DeliveryInfo = styled.p`
    font-size: 14px;
    color: #333;
    margin-bottom: 0;
    p { margin-bottom: 0; }
  `
  const SelectedProductBox = styled.div`
    background-color: #F6F6F6;
    borde-radius: 3px;
    padding: 25px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  `
  const SelectedTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: rgba(22, 29, 36, 0.7);
    margin-bottom: 10px;
  `
  const SelectedPrice = styled.span`
    font-size: 14px;
    font-weight: 500;
  `
  const CountControl = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 2px;
    border: 1px solid rgba(221, 221, 221, 0.6);

    button {
      width: 35px;
      padding: 7px 0;
    }
    span {
      font-size: 15px;
      width: 25px;
      text-align: center;
      padding: 7px 0;
    }
  `
  const ButtonBox = styled.div`
    display: flex;
    margin-bottom: 30px;
  `
  const HeartBtn = styled.button`
    width: 56px; height: 56px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    padding-top: 4px;
    color: #161D24;
    transition: all 0.2s;

    img {
      width: 21px;
      margin: 0 auto 4px;
    }
    &:hover {
      border: 1px solid #999;
    }
  `
  const ShareBtn = styled.button`
    width: 56px; height: 56px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
    text-align: center;
    font-size: 11px;
    font-weight: 400;
    padding-top: 4px;
    color: #161D24;
    transition: all 0.2s;

    img {
      width: 21px;
      margin: 0 auto 4px;
    }
    &:hover {
      border: 1px solid #999;
    }
  `
  const CartBtn = styled.button`
    width: 74%; height: 56px;
    background-color: #161D24;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    transition: all 0.2s;

    &:hover {
      background-color: #E60012;
    }
  `
  const DetailInfoBox = styled.div`
    display: flex;
    margin-top: 15px;
    span {
      font-size: 14px;
      color: #999;
      margin-bottom: 0;
      margin-right: 30px;
      width: 37px;
    }
  `
  const DetailInfo = styled.p`
    font-size: 14px;
    color: #333;
    margin-bottom: 0;
    p { margin-bottom: 0; }
  `

  return (
    <Wrap>
      <DetailBox>
        <LeftContainer>
          <LeftImgBox>
            <SubImgList>
              {product.subImages && product.subImages.map((img, index)=> (
                <SubImg key={index} src={img} $isActive={selectedImg === img} onClick={()=>setSelectedImg(img)} />
              ))}
            </SubImgList>
            <MainImg src={selectedImg} alt={product.title} />
          </LeftImgBox>{/*LeftImgSection*/}
          <TabMenu>
            <TabBtn onClick={()=>scrollToSection(detailRef)}>상세정보</TabBtn>
            <TabBtn onClick={()=>scrollToSection(reviewRef)}>리뷰 {product.reviews?.length || 0}</TabBtn>
            <TabBtn onClick={()=>scrollToSection(deliveryRef)}>배송안내</TabBtn>
          </TabMenu>
          <LeftBotContent>
            <InfoBox ref={detailRef}>
              <DetailImageBox $isOpen={isDetailOpen}>
                {product.detailImages?.map((img, index) => (
                <DetailMainImg key={index} src={img} alt={`상세이미지_${index}`} />
                ))}
                {!isDetailOpen && <BlurBox />}
              </DetailImageBox>
              <MoreBtn onClick={()=>setIsDetailOpen(!isDetailOpen)}>
                {isDetailOpen ? '상품설명 접기' : '상품설명 더보기'}
              </MoreBtn>
            </InfoBox>
            <InfoBox ref={reviewRef}>
              <InfoTitle>상품 후기</InfoTitle>

              {allReviewImages.length > 0 && (
                <PhotoReviewBox>
                  {previewImages.map((imgUrl, index) => {
                    const InsidePreview = index === 4 && allReviewImages.length > 5;
                    return (
                      <PhotoCard key={index}>
                        <img src={imgUrl} alt={`포토리뷰_${index}`} />
                        {InsidePreview && (
                          <MoreImg>
                          <span>+ 더보기</span>
                          </MoreImg>
                        )}
                      </PhotoCard>
                    );
                  })}
                </PhotoReviewBox>
              )}
              <ReviewFilter>
                <div className='total_count'>총 {product.reviews?.length || 0}개</div>
                <FilterList>
                  <span className={sortBy === 'recent' ? 'active' : ''} onClick={()=>setSortBy('recent')}>최근등록순</span>
                  <div>ㅣ</div>
                  <span className={sortBy === 'highRating' ? 'active' : ''} onClick={()=>setSortBy('highRating')}>별점높은순</span>
                  <div>ㅣ</div>
                  <span className={sortBy === 'lowRating' ? 'active' : ''} onClick={()=>setSortBy('lowRating')}>별점낮은순</span>
                </FilterList>
              </ReviewFilter>
              <ReviewList>
                {sortedReviews.map((review)=> (
                  <ReviewItem key={review.reviewId}>
                    <ReviewTop>
                      <UserFlex>
                        <UserRating>
                          {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                        </UserRating>
                        <span>{maskUserId(review.userId)}</span>
                      </UserFlex>
                      <ReviewDate>{review.date}</ReviewDate>
                    </ReviewTop>
                    <ReviewContent>{review.content}</ReviewContent>
                    {review.reviewImgs && review.reviewImgs.length > 0 && (
                      <ReviewImgList>
                        {review.reviewImgs.map((imgUrl, index) => (
                          <ReviewImg key={index} src={imgUrl} alt={`리뷰이미지_${index}`} />
                        ))}
                      </ReviewImgList>
                    )}
                  </ReviewItem>
                ))}
              </ReviewList>
            </InfoBox>
            <InfoBox ref={deliveryRef}>
              <InfoTitle>배송 안내</InfoTitle>
            </InfoBox>
          </LeftBotContent>
        </LeftContainer>
        <RightBox>
          <TagList>
            {product.tags && product.tags.map((tag, index)=> (
              <TagNum key={index}>{tag}</TagNum>
            ))}
          </TagList>
          <ProdTitle>{product.title}</ProdTitle>
          <ProdPrice>
            {product.price.toLocaleString()}원
            {isRecent && <NewBadge>NEW</NewBadge>}
          </ProdPrice>
          <DeliveryBox>
            <PTitle>배송방법</PTitle>
            <DeliveryCardBox>
              {DeliveryOptions.map((option)=> (
                <DeliveryCard key={option.id} $isActive={deliveryType === option.id} onClick={()=> setDeliveryType(option.id)}>
                  <img src={option.icon} alt={option.label} />
                  <span>{option.label}</span>
                  <p>{option.desc}</p>
                </DeliveryCard>
            ))}
            </DeliveryCardBox>{/*DeliveryCardBox*/}
            <DeliveryInfoBox>
              <span>배송정보</span>
              <DeliveryInfo>
                {deliveryType === '택배' && (
                  <>
                    <p>전국 주 7일 배송</p>
                    <p>배송비 3,000원 <span>(30,000원 이상 무료)</span></p>
                  </>
                )}
                {deliveryType === '픽업' && (
                  <>
                    <p>17시 전 결제하면 오늘픽업</p>
                    <p>결제 후 상품준비 완료 알림톡 24시간 내 발송, 최대 2일까지 픽업 가능</p>
                  </>
                )}
                {deliveryType === '오늘' && (
                  <>
                    <p>18시 전 결제하면 오늘도착</p>
                    <p>배송비 5,000원 <span>(40,000원 이상 무료)</span></p>
                  </>
                )}
                {deliveryType === '대량' && (
                  <>
                    <p>4박스(48개) 이상부터 구매 가능</p>
                    <p>배송비 소형 26,000원 / 대형 38,000원<br/>직접 방문 매장픽업 시 무료</p>
                  </>
                )}
              </DeliveryInfo>
            </DeliveryInfoBox>
          </DeliveryBox>{/*DeliveryBox*/}
          <SelectedProductBox>
            <div>
              <SelectedTitle>{product.title}</SelectedTitle>
              <SelectedPrice>{product.price.toLocaleString()}원</SelectedPrice>
            </div>
            <CountControl>
              <button onClick={()=>handleQuantity('minus')}>-</button>
              <span>{quantity}</span>
              <button onClick={()=>handleQuantity('plus')}>+</button>
            </CountControl>
          </SelectedProductBox>
          <ButtonBox>
            <HeartBtn><img src={process.env.PUBLIC_URL + '/images/detail_heart.png'} />
              <span>{product.likes >= 9999 ? '9,999+' : product.likes?.toLocaleString()}</span>
            </HeartBtn>
            <ShareBtn><img src={process.env.PUBLIC_URL + '/images/share.png'} />
              <span>{product.shares?.toLocaleString()}</span>
            </ShareBtn>
            <CartBtn onClick={handleAddToCart}>
              {(product.price * quantity).toLocaleString()}원   장바구니 담기
            </CartBtn>
          </ButtonBox>
          <DetailInfoBox>
            <span>포인트</span>
            <DetailInfo>0.1% 다이소 포인트 적립</DetailInfo>
          </DetailInfoBox>
          <DetailInfoBox>
            <span>결제</span>
            <DetailInfo>페이코포인트로 3만 5천원 이상 결제 시 1천원 즉시 할인
              <p>다이소 삼성카드 다이소몰 이용금액의 1% 할인</p>
            </DetailInfo>
          </DetailInfoBox>
        </RightBox>{/*RightSection*/}
      </DetailBox>
    </Wrap>
  )
}
