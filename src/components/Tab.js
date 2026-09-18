import React from 'react';
import styled from 'styled-components';

export default function Tab({data, activeTab, setActiveTab}) {

  const TabContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `
  const TabBtn = styled.button`
    background-color:${props => props.$isActive ? '#161D24' : '#fff'};
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 30px;
    padding: 8px 20px;
    color: ${props => props.$isActive ? '#fff' : '#666'};
    font-weight: ${props => props.$isActive ? '600' : '400'};
    font-size: 16px;
    margin-right: 10px;
    margin-bottom: 10px;
    transition: all 0.2s;
    
    ${props=>!props.$isAcitve &&`
      &:hover {
        background-color: #161D24;
        color: #fff;
        font-weight: 600;
      }
    `}
    ${props=>props.$isAcitve &&`
      &:hover {
        background-color: #161D24;
        color: #fff;
        font-weight: 600;
      }
    `}
  `

  return (
    <TabContainer>
      {data.map(tab => (
        <TabBtn key={tab.id} $isActive={activeTab === tab.id} onClick={()=> setActiveTab(tab.id)}>
          {tab.label}
        </TabBtn>
      ))}
    </TabContainer>
  )
}
