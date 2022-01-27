import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardHeaderMenu = styled.div`
  position: fixed;
  top: 45px;
  right: 40px;
  z-index: 300;
  @media screen and (max-width: 600px) {
    right: 25px;
  }
`;

export const DashboardTitle = styled.h2`
  position: relative;
  width: ${(props) => props.width};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 15px;
  ::before {
    content: "";
    position: absolute;
    background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
      0% no-repeat padding-box;
    width: 75%;
    height: 8px;
    margin: 0 auto;
    bottom: 2px;
  }
  ::after {
    content: "";
    position: absolute;
    background: #070d2f;
    width: 60%;
    height: 8px;
    right: -2px;
    transform: skewX(30deg);
    bottom: 5px;
  }
  @media screen and (max-width: 1440px) {
    font-size: 30px;
    ::before {
      width: 55%;
      height: 6px;
    }
    ::after {
      width: 75%;
      height: 6px;
      bottom: 4px;
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: 24px;
    ::before {
      width: 45%;
      height: 5px;
      bottom: 1px;
    }
    ::after {
      width: 80%;
      height: 5px;
      bottom: 3px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 400px;
    font-size: 18px;
    ::before {
      width: 45%;
      height: 4px;
    }
    ::after {
      width: 75%;
      height: 4px;
      bottom: 3px;
    }
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    padding-top: 10px;
    font-size: 14px;
    ::before {
      width: 45%;
      height: 3px;
      bottom: 0;
    }
    ::after {
      width: 75%;
      height: 3px;
      bottom: 1px;
    }
  }
`;

export const ConnectWalletButton = styled(Link)`
  position: absolute;
  top: 0;
  right: 0px;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: bold;
  z-index: 100;
  background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
    0% no-repeat padding-box;
  @media screen and (max-width: 1440px) {
    padding: 8px 20px;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    padding: 6px 15px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    right: 30px;
    padding: 4px 10px;
    font-size: 12px;
  }
  @media screen and (max-width: 425px) {
    padding: 2px 5px;
    font-size: 10px;
    top: 5px;
  }
`;
