import styled from "styled-components";

export const UnstakeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const UnstakeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 45px 0;
  margin-bottom: 50px;
  @media screen and (max-width: 1440px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    padding: 30px 0;
  }
`;

export const UnstakeTokenActionGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-column-gap: 50px;
  width: 100%;
  height: fit-content;
  @media screen and (max-width: 1440px) {
    grid-row-gap: 40px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export const UnstakeTokenActionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 35px 0;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

export const UnstakeTokenActionTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  svg {
    margin-left: 10px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const UnstakeTokenActionSubTitle = styled.span`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 40px;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    margin-bottom: 35px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
`;

export const UnstakeTokenActionBurnContent = styled.h4`
  font-size: 16px;
  line-height: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const UnstakeTokenPolygon = styled.div`
  height: 200px;
  width: 120px;
  background: white;
  margin-bottom: 35px;
  position: relative;
  box-sizing: border-box;
  ::after,
  ::before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: 0;
    border-top: 100px solid transparent;
    border-bottom: 100px solid transparent;
  }
  ::before {
    left: -50px;
    border-right: 50px solid white;
  }
  ::after {
    right: -50px;
    border-left: 50px solid white;
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 30px;
    height: 180px;
    width: 108px;
    ::after,
    ::before {
      border-top: 90px solid transparent;
      border-bottom: 90px solid transparent;
    }
    ::before {
      left: -45px;
      border-right: 45px solid white;
    }
    ::after {
      right: -45px;
      border-left: 45px solid white;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
    height: 160px;
    width: 96px;
    ::after,
    ::before {
      border-top: 80px solid transparent;
      border-bottom: 80px solid transparent;
    }
    ::before {
      left: -40px;
      border-right: 40px solid white;
    }
    ::after {
      right: -40px;
      border-left: 40px solid white;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    height: 140px;
    width: 84px;
    ::after,
    ::before {
      border-top: 70px solid transparent;
      border-bottom: 70px solid transparent;
    }
    ::before {
      left: -35px;
      border-right: 35px solid white;
    }
    ::after {
      right: -40px;
      border-left: 40px solid white;
    }
  }
`;

export const UnstakeTokenActionClaimContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 65px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1440px) {
    margin-top: 35px;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 55px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const UnstakeTokenAction = styled.a`
  padding: 10px 70px;
  background: ${(props) =>
    props.flag
      ? "#ff008f"
      : "transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0% 0% no-repeat padding-box"};
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1440px) {
    padding: 8px 55px;
  }
  @media screen and (max-width: 1024px) {
    padding: 6px 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 4px 25px;
  }
`;
