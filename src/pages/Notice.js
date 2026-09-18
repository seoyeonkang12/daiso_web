import React, { useState } from 'react';
import styled from 'styled-components';

const noticeData = [
  {id: 1, type: '공지사항', title: '다이소 모바일 상품권 출시 안내', date: '2022-09-05', url: 'https://www.daiso.co.kr/cs/notice/65277?'},
  {id: 2, type: '공지사항', title: '다이소 기프트카드 출시 안내', date: '2023-12-28', url: 'https://www.daiso.co.kr/cs/notice/65278?'},
  {id: 3, type: '공지사항', title: '새로워진 다이소몰 오픈 안내', date: '2024-01-02', url: 'https://www.daiso.co.kr/cs/notice/65278?'},
  {id: 4, type: '공지사항', title: '2025 설날 당일 영업매장 안내', date: '2025-01-20', url: 'https://www.daiso.co.kr/cs/notice/68400?'},
  {id: 5, type: '공지사항', title: '민생회복 소비쿠폰 사용 가능매장 안내', date: '2025-07-21', url: 'https://www.daiso.co.kr/cs/notice/86567?'},
  {id: 6, type: '공지사항', title: '2025 추석 당일 영업매장 안내', date: '2025-09-26', url: 'https://www.daiso.co.kr/cs/notice/92728?'},
  {id: 7, type: '공지사항', title: '2026 설날 당일 영업매장 안내', date: '2026-02-09', url: 'https://www.daiso.co.kr/cs/notice/103158?'},
];

export default function Notice() {

  const sortData = [...noticeData].sort((a, b) => new Date(b.date) - new Date(a.date));

  const [nowPage, setNowPage] = useState(1);
  const postsPerPage = 10;
  const totalPages =Array.from({length: Math.ceil(sortData.length/postsPerPage)},(_, i)=>i + 1);

  const indexOfLastPost = nowPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortData.slice(indexOfFirstPost, indexOfLastPost);


  const Wrap = styled.div`
    width: 1280px;
    margin: 0 auto 120px;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 50px;
    line-height: 48px;
    margin-top: 50px;
  `
  const NoticeRow = styled.a`
    display: flex;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    text-decoration: none;
    transition: all 0.2s;

    &:first-of-type {
      border-top: 1px solid #161D24;
    }
      &:hover {
        background-color: #F5F5F5;
      }
  `
  const Type = styled.span`
    color: #666;
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    margin-right: 60px;
  `
  const NoticeTitle = styled.div`
    flex: 1;
    font-size: 16px;
    color: #161D24;
    font-weight: 400;
    line-height: 18px;
  `
  const NoticeDate = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: #666;
    line-height: 18px;
  `
  const Pagination = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 50px;
  `
  const PageBtn = styled.button`
    background: none;
    border: none;
    font-size: 14px;
    color: ${(props)=>props.active ? '#161D24' : '#999'};
    font-weight: 400;

    &:hover {
      color: ${(props) => props.active ? '#161D24' : '#999'};
    }
  `
  const NextBtn = styled.button`
    background: none;
    border: none;
    opacity: 0.5;
    width: 6px;
  `

  return (
    <Wrap>
      <Title>공지사항</Title>
      {currentPosts.map((item)=>(
        <NoticeRow key={item.id} href={item.url} target='_blank' rel="noopener noreferrer">
          <Type>{item.type}</Type>
          <NoticeTitle>{item.title}</NoticeTitle>
          <NoticeDate>{item.date}</NoticeDate> 
        </NoticeRow>
      ))}
      <Pagination>
        {totalPages.map((page) => (
          <PageBtn
            key={page}
            active={nowPage === page}
            onClick={() => setNowPage(page)}
          >
            {page}
          </PageBtn>
        ))}
        <NextBtn onClick={() => nowPage < totalPages.length && setNowPage(nowPage + 1)}>
          <img src={process.env.PUBLIC_URL + '/images/more.png'} />
        </NextBtn>
      </Pagination>
    </Wrap>
  )
}
