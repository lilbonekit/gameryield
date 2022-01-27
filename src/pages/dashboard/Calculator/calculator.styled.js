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
  margin-bottom: 40px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const CalculatorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 85px 180px;
  background-color: rgba(255, 255, 255, 0.05);
  @media screen and (max-width: 1440px) {
    padding: 70px 130px;
  }
  @media screen and (max-width: 1024px) {
    padding: 55px 80px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 30px;
  }
`;

export const CalculatorCardHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const CalculatorCardInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const CalculatorCardPooledETHInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  & > span {
    font-weight: 16px;
    margin-bottom: 10px;
  }
`;

export const CalculatorCardSymbol = styled.span`
  color: #01f3fc;
  font-size: 50px;
  stroke-width: 5px;
  padding-top: 30px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 35px;
    padding-top: 70px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
    padding-top: 35px;
  }
`;

export const CalculatorCardGMLRETHInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 23%;
  & > span {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

export const CalculatorCardInput = styled.input`
  height: 75px;
  width: 100%;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  border-color: ${(props) => props.color};
  border-radius: 8px;
  @media screen and (max-width: 1440px) {
    height: 60px;
    font-size: 35px;
  }
  @media screen and (max-width: 1024px) {
    height: 55px;
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
    font-size: 20px;
  }
`;

export const CalculatorCardSliderGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 75px;
  & > span {
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 60px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
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
    font-size: 24px;
    font-weight: bold;
    @media screen and (max-width: 1440px) {
      font-size: 20px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 16px;
    }
    @media screen and (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
