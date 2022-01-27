import styled from "styled-components";

export const UnstakeTokenBalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background: ${(props) =>
    props.flag
      ? "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0) 100%);"
      : "linear-gradient(90deg, rgba(0, 245, 252, 0.23) 0%, rgba(19, 58, 250, 0.23) 100%);"};
  @media screen and (max-width: 1440px) {
    height: 50px;
  }
  @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`;

export const UnstakeTokenInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`;

export const UnstakeTokenName = styled.span`
  font-size: 16px;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const UnstakeTokenValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
