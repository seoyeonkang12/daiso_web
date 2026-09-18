import './App.css';
import { useEffect } from 'react';

import Home from './pages/Home';
import Category from './pages/Category';
import New from './pages/New';
import Pick from './pages/Pick';
import Soldout from './pages/Soldout';
import Notice from './pages/Notice';
import Login from './pages/Login';
import Cart from './pages/Cart';
import About from './pages/About';

import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';

import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './pages/ProductDetail';


function App() {

  const { pathname } = useLocation();

  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
    <div className="App">
      <header>
        <p>발견하는 재미를 느껴보세요</p>
        <div className='header'>
          <div className='header_top_outer'>
            <div className='header_top'>
              <div className='logo'>
                <NavLink className='logo_img' to='/'><img src={process.env.PUBLIC_URL + '/images/daiso_logo.svg'} alt='logo_img' /></NavLink>
                <Form className="search_box">
                  <Form.Control
                    type="search"
                    placeholder="검색어를 입력하세요"
                    className="input"
                    aria-label="Search"
                  />
                  <Button variant="outline-success"><img src={process.env.PUBLIC_URL + '/images/search_icon.png'}/></Button>
                </Form>
              </div>
              <div className='header_right'>
                <NavLink className='user' to='/login'><img src={process.env.PUBLIC_URL + '/images/user.png'} alt='user_img' /></NavLink>
                <NavLink className='heart' to='/heart'><img src={process.env.PUBLIC_URL + '/images/heart.png'} alt='heart_img' /></NavLink>
                <NavLink className='shopping' to='/cart'><img src={process.env.PUBLIC_URL + '/images/shopping.png'} alt='shopping_img' /></NavLink>
              </div>
            </div>
          </div>
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0">
                  <Nav.Link as={NavLink} to='/' className='gnbs'>홈</Nav.Link>
                  <Nav.Link as={NavLink} to='/category' className='gnbs'>카테고리</Nav.Link>
                  <Nav.Link as={NavLink} to='/new' className='gnbs'>신상품</Nav.Link>
                  <Nav.Link as={NavLink} to='/pick' className='pick' >다이소 pick
                    <div className='pick_add'>오늘의 발견!</div>
                  </Nav.Link>
                  <Nav.Link as={NavLink} to='/soldout' className='gnbs'>품절임박</Nav.Link>
                  <Nav.Link as={NavLink} to='/notice' className='gnbs'>공지사항</Nav.Link>
                </Nav>
              </Navbar>
            </Container>
          </Navbar>
        </div>
      </header>
      <Home />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category' element={<Category />} />
        <Route path='new' element={<New />} />
        <Route path='pick' element={<Pick />} />
        <Route path='soldout' element={<Soldout />} />
        <Route path='product/:id' element={<ProductDetail />} />
        <Route path='notice' element={<Notice />} />
        <Route path='login' element={<Login />} />
        <Route path='cart' element={<Cart />} />
        <Route path='about' element={<About />} />
      </Routes>
      <footer>
        <div className='footer'>
          <div className='footer_top'>
            <div className='top_left'>
              <div className='service'>
                <p>고객센터</p>
                <div className='service_info'>
                  <div>
                    <p className='p_first'>온라인 다이소몰</p>
                    <p>1599-2211
                      <span>평일 09:00 ~ 18:00</span>
                    </p>
                  </div>
                  <div>
                    <p className='p_first'>다이소 매장</p>
                    <p>1522-4400
                      <span>평일 09:00 ~ 18:00</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='about'>
                <p>회사소개</p>
                <div className='about_info'>
                  <div>
                    <p className='about_intro'><Link to='/about' style={{textDecoration: 'none', color: 'inherit'}} >기업소개</Link></p>
                    <p>경영이념</p>
                  </div>
                  <div>
                    <p>국민가게, 다이소</p>
                    <p>인재채용</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='top_right'>
              <div><a href='https://blog.naver.com/daisoblog' target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/blog.png'} /></a></div>
              <p className='insta'><a href='https://www.instagram.com/daisolife' target='_blank' rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></p>
              <p className='face'><a href='https://www.facebook.com/daisolife?fref=ts' target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></p>
              <p className='tube'><a href='https://www.youtube.com/channel/UChz7dY8O1jTD8bXGJ8JgXEA' target='_blank' rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></p>
              <p className='tictok'><a href='https://www.tiktok.com/@daisolife' target='_blank' rel="noreferrer"><i className="fa-brands fa-tiktok"></i></a></p>
            </div>
          </div>{/*footer_top*/}
          <div className='footer_bot'>
            <div className='daiso'>(주)아성다이소</div>
            <div className='daiso_info'>
              <p>상호명 및 호스팅 서비스 제공 : ㈜아성다이소</p>
              <p>대표 : 김기호  ㅣ  사업자등록번호 : 213-81-52063  ㅣ  <strong style={{fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)'}}>사업자정보 확인</strong>  ㅣ  email : daisomall_help@daiso.co.kr</p>
              <p>통신판매신고번호 : 2008-서울강남-1525  ㅣ  주소 : 서울특별시 강남구 남부순환로 2748 아성(ASUNG)  ㅣ  개인정보 보호 책임자 : 김범준  ㅣ  청소년 보호 책임자 : 조태진</p>
              <p>다이소몰은 현금 결제 금액에 대한 안전거래를 보장하기 위하여 우리은행과 채무지급보증서 계약을 체결하였습니다.  ㅣ  <strong>서비스 가입 확인</strong></p>
              <span>Copyright &copy; 2023 DAISO. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </footer>
      <aside>
        <button className='topBtn' onClick={scrollToTop} type='button'><img src={process.env.PUBLIC_URL + '/images/topBtn.png'} /></button>
      </aside>
    </div>
  );
}

export default App;
