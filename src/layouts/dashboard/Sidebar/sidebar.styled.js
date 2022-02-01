import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border-right: 1px solid #707070;
  background: linear-gradient(
    180deg,
    rgba(5, 217, 250, 0.13) 0%,
    rgba(191, 191, 191, 0.13) 50%,
    rgba(0, 233, 251, 0.13) 100%
  );
  width: ${(props) => (props.isMobile ? "0" : "400px")};
  @media screen and (max-width: 1440px) {
    width: ${(props) => (props.isMobile ? "0" : "350px")};
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.isMobile ? "0" : "300px")};
  }
  @media screen and (max-width: 768px) {
    position: fixed;
    background: #042649;
    z-index: 200;
    width: ${(props) => (!props.isOpened ? "0" : "100vw")};
  }
`;

export const DashboardLogo = styled.img`
  margin: 28px 0;
  width: 200px;
  height: 100px;
  display: ${(props) => (props.isMobile ? "none" : "block")};
  @media screen and (max-width: 1440px) {
    width: 180px;
    height: 90px;
  }
  @media screen and (max-width: 1024px) {
    width: 140px;
    height: 70px;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (!props.isOpened ? "none" : "block")};
  }
`;

export const DashboardSidebarContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 24px 0;
  overflow-x: hidden;
  overflow-y: auto;
  @media screen and (max-width: 1440px) {
    margin: 16px 0;
  }
  @media screen and (max-width: 1024px) {
    margin: 12px 0;
  }
`;

export const DashboardSidebarLinks = styled.ul`
  display: table-cell;
  vertical-align: middle;
  & > * {
    ::before {
      content: "";
      width: 5px;
      height: 5px;
      display: block;
      background-color: #09496c;
      position: absolute;
      left: 5px;
      top: 70%;
      margin-top: -2.5px;
      -webkit-transition: 250ms;
      transition: 250ms;
      margin-top: -6px;
    }
  }
  & > :not(:first-child) {
    ::after {
      content: "";
      width: 1px;
      height: 63px;
      display: block;
      position: absolute;
      background-color: #09496c;
      opacity: 0.5;
      left: 7px;
      bottom: 50%;
      -webkit-transition: 250ms;
      transition: 250ms;
      @media screen and (max-width: 1440px) {
        height: 47px;
      }
      @media screen and (max-width: 1024px) {
        height: 35px;
      }
    }
  }
`;

export const DashboardSidebarLinkElement = styled.li`
  position: relative;
  margin-bottom: 30px;
  padding-left: 44px;
  transition: 250ms;
  white-space: nowrap;
  :hover {
    font-weight: 500;
    color: #60cae9;
  }
  :active {
    ::before {
      background-color: #ff008f;
    }
  }
  ::before {
    background-color: ${(props) => (props.actived ? "#ff008f" : "#09496c")};
  }
  @media screen and (max-width: 1440px) {
    margin-bottom: 20px;
    padding-left: 30px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 10px;
    padding-left: 25px;
  }
  & > * {
    border-bottom: ${(props) =>
      props.actived ? "1px solid #ff008f" : "1px solid #09496c"};
  }
`;

export const DashboardSidebarLink = styled(Link)`
  display: inline-block;
  transition: border-bottom 250ms;
  padding-bottom: 3px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #60cae9;
  }
  :active {
    border-bottom: 1px solid #ff008f;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    padding-bottom: 2px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding-bottom: 1px;
  }
`;

export const DashboardSidebarHref = styled.a`
  display: inline-block;
  transition: border-bottom 250ms;
  padding-bottom: 3px;
  font-size: 16px;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #60cae9;
  }
  :active {
    border-bottom: 1px solid #ff008f;
  }
  @media screen and (max-width: 1440px) {
    font-size: 14px;
    padding-bottom: 2px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding-bottom: 1px;
  }
`;
