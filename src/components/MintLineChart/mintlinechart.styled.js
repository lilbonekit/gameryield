import styled from "styled-components";

export const MintLineChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  @media screen and (max-width: 1440px) {
    gap: 16px;
  }
  @media screen and (max-width: 1024px) {
    gap: 14px;
  }
  @media screen and (max-width: 768px) {
    gap: 12px;
  }
`;

export const MintLineChartTitle = styled.span`
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

export const MintLineChartAvatar = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (max-width: 1440px) {
    width: 35px;
    height: 35px;
  }
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;
