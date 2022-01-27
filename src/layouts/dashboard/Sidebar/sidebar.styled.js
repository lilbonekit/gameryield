import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

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
  width: ${(props) => (props.isMobile ? "0" : "414px")};
  @media screen and (max-width: 1440px) {
    width: ${(props) => (props.isMobile ? "0" : "340px")};
  }
  @media screen and (max-width: 1024px) {
    width: ${(props) => (props.isMobile ? "0" : "300px")};
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => (!props.isOpened ? "0" : "100vw")};
  }
`;

export const DashboardLogo = styled.img`
  margin: 28px 0;
  width: 280px;
  height: 125px;
  display: ${(props) => (props.isMobile ? "none" : "block")};
  @media screen and (max-width: 1440px) {
    width: 200px;
    height: 100px;
  }
  @media screen and (max-width: 1024px) {
    width: 150px;
    height: 85px;
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
  margin: 28px 0;
  overflow-x: hidden;
  overflow-y: auto;
  @media screen and (max-width: 1440px) {
    margin: 20px 0;
  }
  @media screen and (max-width: 1024px) {
    margin: 16px 0;
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
      top: 50%;
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
      height: 85px;
      display: block;
      position: absolute;
      background-color: #09496c;
      opacity: 0.2;
      left: 7px;
      bottom: 50%;
      z-index: -1;
      -webkit-transition: 250ms;
      transition: 250ms;
    }
  }
`;

export const DashboardSidebarLinkElement = styled.li`
  position: relative;
  margin-bottom: 46px;
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
  @media screen and (max-width: 1440px) {
    margin-bottom: 36px;
    padding-left: 35px;
  }
  @media screen and (max-width: 1024px) {
    margin-bottom: 30px;
    padding-left: 30px;
  }
`;

export const DashboardSidebarLink = styled(Link)`
  display: inline-block;
  border-bottom: 1px solid #09496c;
  transition: border-bottom 250ms;
  padding-bottom: 5px;
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
    padding-bottom: 3px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    padding-bottom: 2px;
  }
`;
