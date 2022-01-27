import styled from "styled-components";

export const DashboardHeaderMenu = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  z-index: 200;
`;

export const DashboardTitle = styled.h2`
  position: relative;
  width: ${(props) => props.width};
  font-size: 53px;
  font-weight: bold;
  margin-bottom: 30px;
  ::before {
    content: "";
    position: absolute;
    background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
      0% no-repeat padding-box;
    width: 99%;
    height: 8px;
    margin: 0 auto;
    bottom: 2px;
  }
  ::after {
    content: "";
    position: absolute;
    background: #070d2f;
    width: 50%;
    height: 8px;
    right: -2px;
    transform: skewX(30deg);
    bottom: 5px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 40px;
    ::before {
      width: 75%;
    }
    ::after {
      width: 65%;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 32px;
    ::before {
      width: 60%;
    }
    ::after {
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 28px;
    ::before {
      width: 55%;
    }
    ::after {
      width: 75%;
    }
  }
  @media screen and (max-width: 425px) {
    font-size: 22px;
    ::before {
      width: 40%;
    }
    ::after {
      width: 80%;
    }
  }
`;

export const ConnectWalletButton = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  padding: 10px 30px;
  font-size: 24px;
  font-weight: bold;
  z-index: 100;
  background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
    0% no-repeat padding-box;
  @media screen and (max-width: 1440px) {
    padding: 10px 20px;
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    padding: 8px 15px;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    padding: 2px 5px;
    font-size: 12px;
    top: 5px;
  }
`;
