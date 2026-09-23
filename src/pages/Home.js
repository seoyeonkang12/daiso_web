import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

import productData from '../data/productData';
import homeStyle from './home.module.css';
import Tab from '../components/Tab';
import { addItem, toggleWish } from './store';

export default function Home() {

  // const [daisoProduct] = useState(productData);
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.wish);

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const { banners, category, rankCategory, products } = productData;
  const [activeTab, setActiveTab] = useState('single');
  const [activeRankTab, setActiveRankTab] = useState('beauty');
  const showBanner = banners[activeTab];
  const showProducts = products.filter(product => product.category && product.category.includes(activeTab)).slice(0, 4);
  const showNewProducts = [...products].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 6);

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


  return (
    <div>
      <Swiper 
      navigation={true}
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerGroup={1}  
      slidesPerView={'auto'}
      centeredSlides={true}
      autoplay={{delay: 3000, disableOnInteraction: false}}
      speed={1000}
      loop={true}
      className={homeStyle.mySwiper}>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_03.jpg'} />
          <div className={homeStyle.txt}>
            <p>가을에 어울리는<br/>프렌치 무드</p>
            <p>일상에 더하는 감성</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_04.jpg'} />
          <div className={homeStyle.txt}>
            <p>넉넉한 한가위<br/>명절 필수템</p>
            <p>성묘부터 명절 요리까지</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_05.jpg'} />
          <div className={homeStyle.txt}>
            <p>올 추석엔<br/>풍성한 건강 선물</p>
            <p>자연관 홍삼정 & 멀티비타민</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_06.jpg'} />
          <div className={homeStyle.txt}>
            <p>휴럼 건강환<br/>홍삼환 · 침향환</p>
            <p>매일 한 알의 습관</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_07.jpg'} />
          <div className={homeStyle.txt}>
            <p>쌓을 수 있어 편리한<br/>투명 뚜껑 수납합</p>
            <p>신상 3종 세트를 만나보세요</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_08.jpg'} />
          <div className={homeStyle.txt}>
            <p>취향대로 고르는<br/>디자인 문구</p>
            <p>심플함에 아이디와 개성을 UP</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_09.jpg'} />
          <div className={homeStyle.txt}>
            <p>칙칙한 피부를<br/>맑고 환하게</p>
            <p>VT 톤온 광채 솔루션</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_10.jpg'} />
          <div className={homeStyle.txt}>
            <p>본셉 NMN<br/>슬로우에이징 케어</p>
            <p>피부 탄력을 탄탄하게</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_01.jpg'} />
          <div className={homeStyle.txt}>
            <p>피부 고민별<br/>맞춤 크림</p>
            <p>환절기 피부케어</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={homeStyle.slide}>
          <img src={process.env.PUBLIC_URL + '/images/main_02.jpg'} />
          <div className={homeStyle.txt}>
            <p>가을 무드로<br/>채우는 우리집</p>
            <p>빛과 소품으로 완성하는 가을밤</p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={homeStyle.container}>
        <section className={homeStyle.pickContent}>
          <div className={homeStyle.mainTitle}>
            <div>
              <span>이번주 다이소 추천!</span>
              <p>다이소 PICK</p>
            </div>
          </div>
          <div className={homeStyle.pickFlex}>
            <Link to={showBanner.link} className={homeStyle.leftBanner}
            style={{backgroundImage: `url(${showBanner.bgImage})`}}>
              <div className={homeStyle.bannerTxt}>{showBanner.title}</div>
              <div className={homeStyle.moreBtn}>더보기<img src={process.env.PUBLIC_URL + '/images/more.png'} /></div>
            </Link>{/*leftBanner*/}
            <div className={homeStyle.rightTab}>
              <div className={homeStyle.TabBox}>
                <Tab
                  data={category}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
              <div className={homeStyle.pickProduct}>
                {showProducts.map(product => {
                  const isWished = wishItems.some(item => item.id === product.id);
                  return (
                    <div key={product.id} className={homeStyle.animateProduct} >
                        <div className={homeStyle.imageBox}>
                        <Link to={`/product/${product.id}`} key={product.id} className={homeStyle.aLink}><img src={product.image} alt={product.title}/></Link>
                          <button className={homeStyle.wishBtn} onClick={()=>handleWishClick(product)}><img src={isWished ? process.env.PUBLIC_URL + '/images/wishBtn-p.png' : process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                          </button>
                        </div>
                        <button className={homeStyle.cartBtn} onClick={()=>handleCartClick(product)}> 
                          <img src={process.env.PUBLIC_URL + '/images/cartBtn.png'} alt='담기'/>담기
                        </button>
                        <Link to={`/product/${product.id}`} key={product.id} className={homeStyle.aLink}>
                          <div className={homeStyle.infoBox}>
                            <p className={homeStyle.prodTitle}>{product.title}</p>
                            <p className={homeStyle.prodPrice}>{product.price.toLocaleString()}원</p>
                            <div className={homeStyle.tagRow}>
                              {product.tags && product.tags.map((tag, index) => (
                                <span key={index} className={homeStyle.tagNum}>{tag}</span>
                              ))}
                            </div>
                          </div>{/*infoBox*/}
                        </Link>
                    </div>
                  );
                })}
              </div>{/*pickProduct*/}
            </div>{/*rightTab*/}
          </div>
        </section>{/*pick*/}
        <section className={homeStyle.event}>
          <img src={process.env.PUBLIC_URL + '/images/event.jpg'} />
          <div className={homeStyle.eventTxt}>
            <p>타공 보드로 꾸미는 내 공간</p>
            <span>새로 선보이는 타공 시리즈</span>
          </div>
        </section>{/*event*/}
        <section className={homeStyle.category}>
          <div className={homeStyle.mainTitle}>
            <div>
              <span>가장 많이 찾는 상품</span>
              <p>카테고리 랭킹</p>
            </div>
            <Link to='/category' className={homeStyle.moreBtn}>더보기<img src={process.env.PUBLIC_URL + '/images/more.png'} /></Link>
          </div>
          <div className={homeStyle.tabWidth}>
            <Tab
              data={rankCategory}
              activeTab={activeRankTab}
              setActiveTab={setActiveRankTab}
            />
          </div>
          <div className={homeStyle.rankGrid}>
            {products.filter(product=>product.category && product.category.includes(activeRankTab)).sort((a, b) => b.sales - a.sales).slice(0, 12).map((product, index)=> {
              const rankNumber = String(index + 1).padStart(2, '0');
              const isWished = wishItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className={homeStyle.animateProduct}>
                  <div className={homeStyle.imageBox}>
                    <Link to={`/product/${product.id}`} className={homeStyle.aLink}>
                      <span className={`${homeStyle.rankBadge} ${index === 0 ? homeStyle.topRank : ''}`}>
                      {rankNumber}
                      </span>
                      <img src={product.image} alt={product.title}/>
                    </Link>
                    <button className={homeStyle.wishBtn} onClick={()=>handleWishClick(product)}><img src={isWished ? process.env.PUBLIC_URL + '/images/wishBtn-p.png' : process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                    </button>
                  </div>
                  <button className={homeStyle.cartBtn} onClick={()=>handleCartClick(product)}> 
                    <img src={process.env.PUBLIC_URL + '/images/cartBtn.png'} />담기
                  </button>
                  <Link to={`/product/${product.id}`} className={homeStyle.aLink}>
                    <div className={homeStyle.infoBox}>
                      <p className={homeStyle.prodTitle}>{product.title}</p>
                      <p className={homeStyle.prodPrice}>{product.price.toLocaleString()}원</p>
                      <div className={homeStyle.tagRow}>
                        {product.tags && product.tags.map((tag, index) => (
                          <span key={index} className={homeStyle.tagNum}>{tag}</span>
                        ))}
                      </div>
                    </div>{/*infoBox*/}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>{/*category*/}
        <section className={homeStyle.newContent}>
          <div className={homeStyle.mainTitle}>
            <div>
              <span>새롭게 만나는 상품</span>
              <p>새로운 상품</p>
            </div>
            <Link to='/new' className={homeStyle.moreBtn}>더보기<img src={process.env.PUBLIC_URL + '/images/more.png'} /></Link>
          </div>
          <div className={homeStyle.newList}>
            {showNewProducts.map(product=> {
              const isRecent = (new Date() - new Date(product.date)) < (30 * 24 * 60 * 60 * 1000);
              const isWished = wishItems.some(item => item.id === product.id);
              return (
                <div key={product.id} className={homeStyle.aLink}>
                  <div className={homeStyle.imageBox}>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={product.title}/>
                    </Link>
                    <button className={homeStyle.wishBtn} onClick={()=>handleWishClick(product)}><img src={isWished ? process.env.PUBLIC_URL + '/images/wishBtn-p.png' : process.env.PUBLIC_URL + '/images/wishBtn.png'} />
                    </button>
                  </div>
                  <button className={homeStyle.cartBtn} onClick={()=>handleCartClick(product)}> 
                    <img src={process.env.PUBLIC_URL + '/images/cartBtn.png'} />담기
                  </button>
                  <Link to={`/product/${product.id}`} className={homeStyle.aLink}>
                    <div className={homeStyle.infoBox}>
                      <p className={homeStyle.prodTitle}>{product.title}</p>
                      <p className={homeStyle.prodPrice}>{product.price.toLocaleString()}원{isRecent && <span className={homeStyle.newBadge}>NEW</span>}</p>
                      <div className={homeStyle.tagRow}>
                        {product.tags && product.tags.map((tag, index) => (
                          <span key={index} className={homeStyle.tagNum}>{tag}</span>
                        ))}
                      </div>
                    </div>{/*infoBox*/}
                  </Link>
                </div>
              );
            })}
          </div>
        </section>{/*newContent*/}
      </div>{/*container*/}
      {popupOpen && (
        <div className={homeStyle.popupOverlay} onClick={()=> setPopupOpen(false)}>
          <div className={homeStyle.popupBox} onClick={(e)=>e.stopPropagation()}>
            <p className={homeStyle.popupTxt}>{popupMessage}</p>
            {popupType !== '' && (
              <Link to={popupType === 'cart' ? '/cart' : '/wish'} className={homeStyle.goCartLink} onClick={() => setPopupOpen(false)}>
                {popupType === 'cart' ? '장바구니 보러가기' : '찜한 상품 보러가기'}
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
