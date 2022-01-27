import styled from "styled-components";

export const CalculatorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const CalculatorTitle = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px;
  @media screen and (max-width: 1440px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

export const CalculatorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 55px 150px;
  background-color: rgba(255, 255, 255, 0.05);
  @media screen and (max-width: 1440px) {
    padding: 30px 100px;
  }
  @media screen and (max-width: 1024px) {
    padding: 25px 50px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const CalculatorCardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const CalculatorCardInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const CalculatorCardPooledETHInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  & > span {
    font-weight: 16px;
    margin-bottom: 5px;
  }
`;

export const CalculatorCardSymbol = styled.span`
  color: #01f3fc;
  font-size: 50px;
  stroke-width: 5px;
  padding-top: 30px;
  @media screen and (max-width: 1440px) {
    font-size: 40px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const CalculatorCardGMLRETHInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  & > span {
    margin-bottom: 5px;
    font-size: 16px;
  }
`;

export const CalculatorCardInput = styled.input`
  height: 70px;
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border-color: ${(props) => props.color};
  border-radius: 8px;
  @media screen and (max-width: 1440px) {
    height: 60px;
    font-size: 32px;
  }
  @media screen and (max-width: 1024px) {
    height: 55px;
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
    font-size: 16px;
  }
`;

export const CalculatorCardSliderGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  & > span {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const CalculatorCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CalculatorCardFooterName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & > span {
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
  }
`;

export const CalculatorCardFooterValue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  & > span {
    font-size: 20px;
    font-weight: bold;
    @media screen and (max-width: 1440px) {
      font-size: 18px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 768px) {
      font-size: 14px;
      text-align: right;
    }
  }
`;
