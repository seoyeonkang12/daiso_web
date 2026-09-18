import React from 'react';
import styled from 'styled-components';

export default function About() {
  
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
  const AboutImg = styled.div`
    width: 100%;
    margin-bottom: 50px;
    img{
      border-radius: 5px;
    }
  `
  const AboutTxt = styled.div`
    display: flex;
    justify-content: space-between;
  `
  const LeftTxt = styled.div`
    font-size: 36px;
    font-weight: 500;
    line-height: 46px;
  `
  const StrongRed = styled.strong`
    font-weight: 700;
    color: #E60012;
  `
  const RightP = styled.div`
    display: block;
  `
  const FirstP = styled.p`
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 40px;
  `
  const FirstStrong = styled.strong`
    font-weight: 700;
  `
  const InfoP = styled.p`
    font-size: 20px;
    line-height: 28px;
    color: rgba(22, 29, 36, 0.8);
    margin-bottom: 35px;
  `
  const BoldP = styled.strong`
    color: #161D24;
    font-weight: 600;
  `
  const InfoPLast = styled.p`
    font-size: 20px;
    line-height: 28px;
    color: rgba(22, 29, 36, 0.8);
    margin-bottom: 50px;
  `
  const BossName = styled.div`
    display: flex;
    align-items: end;
  `
  const Rank = styled.span`
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    margin-right: 30px;
  `
  const Name = styled.span`
    font-size: 24px;
    font-weight: 700;
    line-height: 26px;
  `

  return (
    <Wrap>
      <Title>기업소개</Title>
      <AboutImg><img src={process.env.PUBLIC_URL + '/images/about.jpg'} /></AboutImg>
      <AboutTxt>
        <LeftTxt><StrongRed>국민가게, 다이소</StrongRed>의 홈페이지를<br/>찾아주신 여러분 진심으로<br/>환영합니다.</LeftTxt>
        <RightP>
          <FirstP>아성다이소는 1997년 국내 최초로 균일가 생활용품 첫 매장을 열었고<br/>지금까지 수많은 굴곡을 거치면서 소비자들의 큰 사랑을 받아<br/>오늘의 <FirstStrong>국민가게</FirstStrong>로 성장하였습니다.</FirstP>
          <InfoP>아성다이소는 <BoldP>놀라운 가치로 고객에게 즐거움과 감동을</BoldP> 드리는 것을<br/>경영이념으로 실천하고 있습니다.</InfoP>
          <InfoP>이를 위해 첫 매장을 연 처음부터 오늘에 이르기까지,<br/>아무리 작은 돈도 그 속에 담긴 땀의 가치는 크기에 <BoldP>천원의 가치를 소중하게 여기는<br/>균일가 정신</BoldP>을 한결같이 지켜왔습니다.</InfoP>
          <InfoP>고객에게 신뢰받는 기업으로 자리매김하려면 가격은 놀랄 정도로 저렴하되<br/>품질은 기대보다 훨씬 뛰어나야 한다는 것이 상품에 대한 우리 다이소의 기준입니다.</InfoP>
          <InfoP>이를 위해 우리는 남보다 많이 뛰고자 노력하고 있으며 유통과정에서 제거할 수 있는<br/>거품을 빼기 위해 최선을 다하고 있습니다.</InfoP>
          <InfoPLast><BoldP>‘국민가게, 다이소’</BoldP>는 지금과 같이 고객의 가치를 최우선으로 생각하는 정직한 고집으로<br/>기본을 지키며, 꼭 필요한 생활용품처럼 꼭 필요한 국민가게로 여러분의 곁을 지키겠습니다.</InfoPLast>
          <BossName>
            <Rank>아성다이소 회장</Rank>
            <Name>박정부</Name>
          </BossName>
        </RightP>
      </AboutTxt>
    </Wrap>
  )
}
