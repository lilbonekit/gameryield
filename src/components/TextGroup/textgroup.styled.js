import styled from "styled-components";

export const TextGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.align ? "flex-start" : "center")};
  height: 60px;
  @media screen and (max-width: 1440px) {
    height: 55px;
  }
  @media screen and (max-width: 1024px) {
    height: 50px;
  }
  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const TextTitleGroup = styled.div`
  display: flex;
`;

export const TextSubTitleGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.span`
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const TextTitleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export const TextSubTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const TextSubText = styled.span`
  font-size: 24px;
  text-align: center;
  margin-left: 15px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
    margin-left: 12px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-left: 10px;
  }
`;
