import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from './Header';
import KyotoImage from '../assets/kyoto.png';
import Footer from './Footer';

const FirstView = () => {
  return (
    <Wrapper>
      <Header />
      <MessageWrapper>
        <Message>Finished packing?</Message>
        <AnimatedMessage>Get a Tour Guide!</AnimatedMessage>
        <Description>a</Description>
      </MessageWrapper>
      <Image src={KyotoImage} alt="" />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const MessageWrapper = styled.div`
  text-align: center;
  font-weight: 900;
  user-select: none;
`;
const Message = styled.p`
  color: #000;
  font-size: 65px;
  padding-top: 40px;
  margin: 0px;
`;
const Shine = keyframes`
  to {
      background-position: 200% center;
  }
`;
const AnimatedMessage = styled.p`
  font-size: 85px;
  display: inline;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 185, 33, 1) 52%,
    rgba(0, 0, 0, 1)
  );
  background-size: 200% auto;

  color: #000;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: ${Shine} 4s linear infinite;
`;
const Description = styled.p``;
const Image = styled.img`
  width: 30%;
`;

export default FirstView;
