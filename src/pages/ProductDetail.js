import React from 'react';
import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import productData from '../data/productData';
import Accordion from 'react-bootstrap/Accordion';


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
  const [selectedImg, setSelectedImg] = useState(product?.mainImg || product?.subImages?.[0] || '');
  const [activeTab, setActiveTab] = useState('detail');
  const [deliveryType, setDeliveryType] = useState('택배');
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [sortBy, setSortBy] = useState('highRating');
  const [nowPage, setNowPage] = useState(1);
  const reviewPerPage = 3;
  
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

  const handleTabClick = (elementRef, tabName) => {
    setActiveTab(tabName);
    if(elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 58,
        behavior: 'smooth',
      });
    }
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

  const lastReview = nowPage + reviewPerPage;
  const firstReview = lastReview - reviewPerPage;

  const cutReviews = sortedReviews.slice(firstReview, lastReview);
  const totalPages = Math.ceil(sortedReviews.length / reviewPerPage);

  const PageNumbers = [];
  for(let i=1; i<=totalPages; i++){
    PageNumbers.push(i);
  }
  const handleSortChange = (type) => {
    setSortBy(type);
    setNowPage(1);
  };

  
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
    width: 61px; height: 74px;
    object-fit: cover;
    margin-bottom: 8px;
    border-radius: 3px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s;

    border: 1px solid ${(props) => props.$isActive ? '#161D24' : '#fff'};
    &:hover {
      border: 1px solid #161D24;
    }
  `
  const MainImg = styled.img`
    width: 100%; height: 600px;
    object-fit: cover;
    border-radius: 6px;
  `  
  const TabMenu = styled.div`
    display: flex;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    margin-bottom: 30px;
    position: sticky;
    top: 0;
    z-index: 99;
  `
  const TabBtn = styled.button`
    flex-grow: 1;
    padding: 20px 0;
    background: none;
    border: none;
    font-size: 16px;
    line-height: 16px;
    font-weight: ${(props) => props.$isActive ? '600' : '400'};
    color: ${(props) => props.$isActive ? '#161D24' : '#999'};
    border-bottom: 2px solid ${(props)=> props.$isActive ? '#161D24' : 'transparent'};
    margin-bottom: -1px;
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
    display: block;
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
    margin: 30px auto 0;
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
    margin-bottom: 0;
  `
  const PhotoReviewBox = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 30px 0 10px;
  `
  const PhotoCard = styled.div`
    position: relative;
    width: calc((100% - 60px)/7);
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
    margin-top: 20px;

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
    margin-bottom: 0;
  `
  const ReviewImgList = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 30px;
  `
  const ReviewImg = styled.img`
    width: 100px; height: 100px;
    border-radius: 3px;
    object-fit: cover;
  `
  const PageinationBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 50px;
  `
  const PageNumBtn = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    width: 20px; height: 20px;
    transition: all 0.2s;
    
    color: ${(props) => props.$isActive ? '#161D24' : '#999'};
    font-weight: ${props => props.$isActive ? '500' : '400'};

    &:hover {
      color: #161D24;
    }
  `
  const PageBtn = styled.button`
    background: none;
    border: none;
    width: 25px; height: 25px;
    opacity: 0.4;
    transition: all 0.2s;

    img {
      width: 6px;
      margin: 0 auto;
    }
    visibility: ${(props) => props.$show? 'visible' : 'hidden'};

    &:hover {
      opacity: 1;
    }
  `
  const StyledAccordion = styled(Accordion)`
    width: 100%;
    margin-top: 0;

    .accordion-item {
      border: none;
      border-bottom: 1px solid #ddd;
      background-color: #fff;  
    }

    .accordion-button {
      padding: 20px 20px;
      font-size: 16px;
      color: #161D24;
      box-shadow: none;

      &:focus {
        box-shadow: none;
        border-color: transparent;
      }
      &:not(.collapsed) {
        color: #161D24;
        background-color: #fff;
        font-weight: 500;
      }
    }
    .accordion-body {
      padding: 25px 20px;
      background-color: #F6F6F6;

      p {
        font-size: 14px;
        line-height: 16px;
        font-weight: 500;
        color: #161D24;
        margin-bottom: 8px;
      }
      span {
        display: block;
        font-size: 14px;
        color: #666;
        line-height: 20px;
        margin-bottom: 20px;
        &:last-child {margin-bottom: 0;}
      }
    }
  `



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
    background-color: #E60012;
    border-radius: 3px;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    transition: all 0.2s;

    &:hover {
      background-color: #161D24;
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
            <TabBtn $isActive={activeTab === 'detail'} onClick={()=>handleTabClick(detailRef,'detail')}>상세정보</TabBtn>
            <TabBtn $isActive={activeTab === 'review'} onClick={()=>handleTabClick(reviewRef,'review')}>리뷰 {product.reviews?.length || 0}</TabBtn>
            <TabBtn $isActive={activeTab === 'delivery'} onClick={()=>handleTabClick(deliveryRef,'delivery')}>배송안내</TabBtn>
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
                    const InsidePreview = index === 5 && allReviewImages.length > 5;
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
                  <span className={sortBy === 'recent' ? 'active' : ''} onClick={()=>handleSortChange('recent')}>최근등록순</span>
                  <div>ㅣ</div>
                  <span className={sortBy === 'highRating' ? 'active' : ''} onClick={()=>handleSortChange('highRating')}>별점높은순</span>
                  <div>ㅣ</div>
                  <span className={sortBy === 'lowRating' ? 'active' : ''} onClick={()=>handleSortChange('lowRating')}>별점낮은순</span>
                </FilterList>
              </ReviewFilter>
              <ReviewList>
                {cutReviews.map((review)=> (
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
              {totalPages > 1 && (
                <PageinationBox>
                  <PageBtn $show={nowPage > 1} onClick={()=>setNowPage(prev => Math.max(prev - 1, 1))} ><img src={process.env.PUBLIC_URL + '/images/left_arrow_w.png'} /></PageBtn>
                  {PageNumbers.map((number) => (
                    <PageNumBtn key={number} $isActive={nowPage === number} onClick={()=>setNowPage(number)}>{number}</PageNumBtn>
                  ))}
                  <PageBtn $show={nowPage < totalPages} onClick={()=>setNowPage(prev=>Math.min(prev+1, totalPages))}><img src={process.env.PUBLIC_URL + '/images/more.png'} /></PageBtn>
                </PageinationBox>
              )}
            </InfoBox>
            <InfoBox ref={deliveryRef}>
              <InfoTitle>배송 안내</InfoTitle>
              <StyledAccordion alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>배송안내</Accordion.Header>
                  <Accordion.Body>
                    <p>• 택배배송</p>
                    <span>평일 오후 5시까지 주문시 내일 아침 8시전 수령 3만원 이상 주문 시 무료 배송</span>
                    <p>• 매장픽업</p>
                    <span>오후 5시 전 결제 시 오늘 픽업 가능, 결제 완료 후 상품준비 완료 알림톡 24시간 내 발송, 최대 2일까지 픽업 가능</span>
                    <p>• 오늘배송</p>
                    <span>오후 6시 전 결제 시 오늘 도착 예정</span>
                    <p>• 대량주문</p>
                    <span>4박스(48개) 이상부터 구매 가능<br/>배송비 소형 26,000원 / 대형 38,000원 직접 방문 매장픽업 시 무료</span>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>반품/취소/교환/배송비 안내</Accordion.Header>
                  <Accordion.Body>
                    <p>• 주문취소</p>
                    <span><strong>상품 준비가 시작되면 주문 취소가 불가합니다.</strong> (※ 배송준비중/픽업준비중인 주문은 취소 불가)<br/>동시 주문이 많은 상품은 결제 후에도 품절될 수 있습니다.<br/>상품 품절, 택배사 배송 지연 등의 사유로 인한 전체 주문 취소는 불가합니다.</span>
                    <p>• 교환/반품 유의사항</p>
                    <span><strong>상품이 수거되지 않으면 교환/환불이 처리되지 않습니다.</strong><br/>신청 이후 7영업일 이상 상품이 수거되지 않을 경우,교환/반품이 자동 철회 처리될 수 있습니다.<br/>교환은 동일 옵션/품번 상품만 신청 가능합니다. (※ 색상, 사이즈, 디자인 등 상품 옵션 변경이 필요하신 경우, 반품 후 재구매해 주시기 바랍니다.)<br/>교환 상품이 품절일 경우, 상품 금액은 환불 처리됩니다.</span>
                    <p>• 교환/반품 신청 기간</p>
                    <span>[고객 사유] 상품을 받으신 날부터 7일 이내 신청 가능<br/>단순변심, 주문 착오, 주소지 오기재 등</span>
                    <span>[다이소몰 사유] 상품을 받으신 날부터 3개월 이내 또는 그 사실을 알 수 있었던 날부터 30일 이내 상품이 표기/광고 내용과 다른 경우<br/>계약 내용과 다르게 이행된 경우</span>
                    <p>• 교환/반품 절차 안내</p>
                    <span><strong>택배배송</strong><br/>온라인 접수→택배사 수거<br/>※ 매장 교환/반품은 불가합니다.<br/><br/><strong>매장픽업/대량주문(픽업)</strong><br/>온라인 접수 후 매장 방문<br/>구매 매장 방문 접수<br/>※ 택배 교환/반품은 불가합니다.<br/><br/><strong>대량주문(배송)</strong><br/>온라인 접수→담당자 안내→차량 수거<br/>※ 택배 교환/반품은 불가합니다.</span>
                  </Accordion.Body>
                </Accordion.Item>
              </StyledAccordion>
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
