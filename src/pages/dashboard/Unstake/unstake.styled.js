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
    padding: 40px 0;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    padding: 35px 0;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    padding: 30px 0;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 10px;
    padding: 25px 0;
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
    grid-column-gap: 40px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
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
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
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
    font-size: 12px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
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
    font-size: 12px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-bottom: 15px;
  }
`;

export const UnstakeTokenPolygon = styled.div`
  height: 180px;
  width: 108px;
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
  @media screen and (max-width: 1440px) {
    margin-bottom: 30px;
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
  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
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
      right: -35px;
      border-left: 35px solid white;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 20px;
    height: 120px;
    width: 72px;
    ::after,
    ::before {
      border-top: 60px solid transparent;
      border-bottom: 60px solid transparent;
    }
    ::before {
      left: -30px;
      border-right: 30px solid white;
    }
    ::after {
      right: -30px;
      border-left: 30px solid white;
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
  margin-bottom: 60px;
  & > :not(:last-child) {
    margin-bottom: 20px;
  }
  @media screen and (max-width: 1440px) {
    margin-top: 35px;
    margin-bottom: 50px;
    & > :not(:last-child) {
      margin-bottom: 18px;
    }
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 40px;
    & > :not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-top: 25px;
    margin-bottom: 30px;
    & > :not(:last-child) {
      margin-bottom: 14px;
    }
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
    font-size: 22px;
    padding: 8px 55px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
    padding: 6px 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 4px 25px;
  }
`;
