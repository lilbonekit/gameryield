import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { isScreenWidth } from "../../../utils/getscreenwidth";
import {
  DashboardLogo,
  DashboardSidebarContainer,
  DashboardSidebarContent,
  DashboardSidebarLink,
  DashboardSidebarLinkElement,
  DashboardSidebarLinks,
} from "./sidebar.styled";
import { links } from "./data";
import Logo from "../../../assets/image/logo.png";

const DashboardSidebar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const router = location.pathname;

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
  }, []);

  return (
    <DashboardSidebarContainer isMobile={isMobile} isOpened={props.isOpened}>
      <Link to="/">
        <DashboardLogo
          src={Logo}
          isMobile={isMobile}
          isOpened={props.isOpened}
        />
      </Link>
      <DashboardSidebarContent>
        <DashboardSidebarLinks>
          {links.map((item, index) => (
            <DashboardSidebarLinkElement
              key={index}
              actived={item.href === router ? 1 : 0}
            >
              <DashboardSidebarLink to={item.href}>
                {item.link}
              </DashboardSidebarLink>
            </DashboardSidebarLinkElement>
          ))}
        </DashboardSidebarLinks>
      </DashboardSidebarContent>
    </DashboardSidebarContainer>
  );
};

export default DashboardSidebar;
