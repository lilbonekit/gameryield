import React, { useEffect, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { isScreenWidth } from "../../../utils/getscreenwidth";
import {
  ConnectWalletButton,
  DashboardHeaderMenu,
  DashboardTitle,
} from "./header.styled";

export const DashboardHeader = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(isScreenWidth(768));
    });
    setIsMobile(isScreenWidth(768));
  }, []);

  return (
    <>
      {isMobile && (
        <DashboardHeaderMenu onClick={props.toggleDrawer}>
          {!props.isOpened ? <MdMenu /> : <MdClose />}
        </DashboardHeaderMenu>
      )}
      <DashboardTitle width={props.width}>{props.title}</DashboardTitle>
      <ConnectWalletButton to="/">CONNECT WALLET</ConnectWalletButton>
    </>
  );
};
