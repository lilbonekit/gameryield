import styled from "styled-components";
import info from "../../../assets/image/info.png";
import burn from "../../../assets/image/burn.png";
import avatar from "../../../assets/image/avatar.png";
import trax from "../../../assets/image/trax.png";
import days from "../../../assets/image/days.png";

export const MintGamerhuntWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MintGamerhuntContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 60px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 1440px) {
    gap: 20px;
    margin: 40px 60px;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
    margin: 20px 40px;
  }
  @media screen and (max-width: 425px) {
    margin: 10px 20px;
  }
`;

export const MintGamerhuntActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  @media screen and (max-width: 1440px) {
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    & > * {
      width: 75% !important;
    }
  }
  @media screen and (max-width: 425px) {
    align-content: center;
    & > * {
      width: 100% !important;
    }
  }
`;

export const MintGamerhuntTraxInput = styled.input`
  background-image: url(${trax});
  background-size: 100% 100%;
  background-color: transparent;
  height: 40px;
  width: 70%;
  outline: none;
  color: white;
  font-size: 14px;
  @media screen and (max-width: 1440px) {
    height: 35px;
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
    font-size: 10px;
  }
  @media screen and (max-width: 700px) {
    height: 25px;
    width: 50%;
  }
`;

export const MintGamerhuntDaysInput = styled.input`
  background-image: url(${days});
  background-size: 100% 100%;
  background-color: transparent;
  height: 40px;
  outline: none;
  color: white;
  font-size: 16px;
  @media screen and (max-width: 1440px) {
    height: 35px;
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    height: 30px;
    font-size: 10px;
  }
  @media screen and (max-width: 700px) {
    height: 25px;
  }
`;

export const MintGamerhuntText = styled.span`
  font-size: 14px;
  @media screen and (max-width: 1440px) {
    font-size: 12px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 10px;
  }
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;

export const MintGamerhuntMiddleText = styled.span`
  font-size: 18px;
  @media screen and (max-width: 1440px) {
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const MintGamerhuntLargeText = styled.span`
  font-size: 20px;
  @media screen and (max-width: 1440px) {
    font-size: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MintGamerhuntInfo = styled.div`
  position: absolute;
  background-image: url(${info});
  background-size: 100% 100%;
  top: 20px;
  right: 15px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    width: 14px;
    height: 14px;
    top: 10px;
    right: 10px;
  }
  @media screen and (max-width: 1024px) {
    width: 12px;
    height: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
  @media screen and (max-width: 425px) {
    top: 5px;
    right: 5px;
    width: 10px;
    height: 10px;
  }
`;

export const MintGamerhuntBurnCard = styled.div`
  position: relative;
  width: 40%;
  padding: 40px 0;
  background-color: #121a3a;
  text-align: center;
  @media screen and (max-width: 1440px) {
    padding: 35px;
  }
  @media screen and (max-width: 1024px) {
    padding: 25px;
  }
  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`;

export const MintGamerhuntBurnAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 40px;
  margin-bottom: 25px;
  @media screen and (max-width: 1440px) {
    gap: 25px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 15px;
  }
`;

export const MintGamerhuntBurnActionButton = styled.div`
  width: 35%;
  height: 40px;
  background-image: url(${burn});
  background-size: 100% 100%;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    height: 35px;
  }
  @media screen and (max-width: 1024px) {
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    height: 25px;
  }
`;

export const MintGamerhuntMintCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  padding: 30px 0;
  background-color: #121a3a;
  @media screen and (max-width: 1440px) {
    padding: 25px 0;
  }
`;

export const MintGamerhuntMintCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const MintGamerhuntMintCardActionGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  width: 80%;
  @media screen and (max-width: 1440px) {
    gap: 35px;
  }
  @media screen and (max-width: 1024px) {
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    gap: 25px;
  }
  @media screen and (max-width: 425px) {
    gap: 20px;
  }
`;

export const MintGamerhuntMintCardActionPart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
  padding: 50px 0;
  @media screen and (max-width: 1440px) {
    padding: 40px 0;
    gap: 30px;
  }
  @media screen and (max-width: 1024px) {
    padding: 35px 0;
    gap: 25px;
  }
  @media screen and (max-width: 768px) {
    padding: 30px 0;
    gap: 20px;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 0;
    gap: 20px;
  }
`;

export const MintGamerhuntMintCardActionCouple = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  @media screen and (max-width: 768px) {
    gap: 25px;
  }
`;

export const MintGamerhuntMintCardETH = styled.div`
  width: 100%;
  border: 1px solid #133bfa;
  background-color: transparent;
  font-size: 16px;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
  :hover,
  :active {
    border: 1px solid #60cae9;
  }
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    padding: 4px 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 3px 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 2px 0;
  }
`;

export const MintGamerhuntMintCardAction = styled.div`
  width: 100%;
  background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
    0% no-repeat padding-box;
  color: #050e2f;
  font-size: 16px;
  text-align: center;
  padding: 5px 0;
  border: 1px solid transparent;
  cursor: pointer;
  :hover,
  :active {
    border: 1px solid white;
  }
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    padding: 4px 0;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding: 3px 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    padding: 2px 0;
  }
`;

export const MintGamerhuntMintCardAvatar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 100%;
  padding: 25px 0;
  @media screen and (max-width: 1440px) {
    padding: 24px 0;
    gap: 15px;
  }
  @media screen and (max-width: 1024px) {
    padding: 23px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 22px 0;
    gap: 10px;
  }
  @media screen and (max-width: 425px) {
    padding: 15px 0;
  }
`;

export const MintGamerhuntMintCardAvatarPart = styled.div`
  background-image: url(${avatar});
  background-size: 100% 100%;
  width: 75px;
  height: 75px;
  @media screen and (max-width: 1440px) {
    width: 65px;
    height: 65px;
  }
  @media screen and (max-width: 1024px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 425px) {
    width: 35px;
    height: 35px;
  }
`;

export const MintGamerhuntMintCardAvatarText = styled.span`
  font-size: 16px;
  text-align: center;
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

export const MintGamerhuntMintCardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const MintGamerhuntMintCardFooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1440px) {
    gap: 15px;
  }
  @media screen and (max-width: 1024px) {
    gap: 10px;
  }
  @media screen and (max-width: 768px) {
    gap: 5px;
  }
`;

export const MintGamerhuntMintCardFooterTextCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MintGamerhuntMintCardFooterAction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatsGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const StatsAvatar = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 1440px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const MintGamerhuntSlider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 700px) {
    width: 75%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const MintGamerhuntSliderTextGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  & > * {
    font-size: 16px;
    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
  }
`;

export const MintGamerhuntChartGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  @media screen and (max-width: 1440px) {
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ChartGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ChartContent = styled.span`
  margin-top: 14px;
  font-size: 16px;
  text-align: center;
  padding: 0 15px;
  @media screen and (max-width: 1440px) {
    margin-top: 12px;
    font-size: 14px;
    padding: 0 10px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    font-size: 12px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 8px;
    font-size: 10px;
  }
`;
