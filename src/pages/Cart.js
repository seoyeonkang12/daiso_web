import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cart() {
  
  const Wrap = styled.div`
    width: 1280px;
    margin: 40px auto;
  `
  const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 80px;
    line-height: 48px;
    margin-top: 50px;
  `


  return (
    <Wrap>
      <Title>장바구니</Title>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </Wrap>
  )
}
