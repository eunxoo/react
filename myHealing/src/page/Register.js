import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
const Register = () => {
  //const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <RegisterContainer>
      <RegisterWrapper>
        <MyHealing>MY_HEALING</MyHealing>
        <Alert>
          가이드를 열람하기 위해서는
          <br />
          로그인이 필요해요!
        </Alert>
        <Message>SNS 계정으로 간편하게 시작하세요.</Message>
        <KakaoBtn>
          <KakaoIcon />
          <p>카카오 계정으로 로그인</p>
        </KakaoBtn>
        <NaverBtn>
          <NaverIcon />
          <p>네이버 계정으로 로그인</p>
        </NaverBtn>
        <GoogleBtn>
          <p>구글 계정으로 로그인</p>
        </GoogleBtn>
        <LoginMessage>
          <LoginAlready>이미 가입하셨나요?</LoginAlready>
          <LoginLink>로그인 하기</LoginLink>
        </LoginMessage>
      </RegisterWrapper>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35rem;
  height: 28.125rem;
`;

const MyHealing = styled.div`
  margin-bottom: 2.5rem;
  font-family: "Comfortaa";
  color: #73bd88;
  font-size: 2.8rem;
  fon-style: normal;
  font-weight: 400;
`;

const Alert = styled.div`
  margin-bottom: 2.5rem;
  font-family: "Mulish";
  color: #373f41;
  font-size: 3rem;
  fon-style: normal;
  font-weight: 700;
  white-space: pre-wrap;
  line-height: 5rem;
`;

const Message = styled.div`
  margin-bottom: 1.25rem;
  font-family: "Mulish";
  color: #737b7d;
  font-size: 1.5rem;
  fon-style: normal;
  font-weight: 400;
`;

const KakaoBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #f9e000;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #191600;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const KakaoIcon = styled(RiKakaoTalkFill)`
  margin-bottom: 0.25rem;
`;

const NaverBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #2db400;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const NaverIcon = styled(SiNaver)`
  margin-bottom: 0.25rem;
`;

const GoogleBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 25rem;
  height: 4rem;
  padding: 1rem 5.2rem;
  margin-bottom: 2.5rem;
  border: none;
  border-radius: 0.2rem;
  background-color: #cecece;
  font-family: "NotoSansKR";
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  box-shadow: 0 0.3rem 0.3rem 0 #bdbdbd;
`;

const LoginMessage = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-family: "NotoSansKR";
  font-style: normal;
  color: #000000;
`;

const LoginAlready = styled.p`
  margin: 0rem 0.3rem;
  font-size: 1rem;
  font-weight: 400;
`;

const LoginLink = styled.p`
  margin: 0rem 0.3rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

export default Register;
