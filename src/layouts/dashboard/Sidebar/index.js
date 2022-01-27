import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
  }, []);

  return (
    <DashboardSidebarContainer isMobile={isMobile} isOpened={props.isOpened}>
      <a href="/">
        <DashboardLogo
          src={Logo}
          isMobile={isMobile}
          isOpened={props.isOpened}
        />
      </a>
      <DashboardSidebarContent>
        <DashboardSidebarLinks>
          {links.map((item, index) => (
            <DashboardSidebarLinkElement key={index}>
              <DashboardSidebarLink href={item.href}>
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
