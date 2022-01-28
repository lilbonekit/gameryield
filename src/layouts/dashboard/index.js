import React, { useState } from "react";
import styled from "styled-components";
import { DashboardHeader } from "./Header";
import DashboardSidebar from "./Sidebar";

const DashboardLayoutContainer = styled.div`
  display: flex;
`;

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 90%;
  max-width: 1048px;
  height: calc(100vh - 80px);
  margin: 40px 0;
`;

const DashboardLayout = (props) => {
  const [isOpened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened((prev) => !prev);
  };

  return (
    <DashboardLayoutContainer>
      <DashboardSidebar isOpened={isOpened} />
      <DashboardWrapper>
        <DashboardContainer>
          <DashboardHeader
            title={props.title}
            width={props.width}
            isOpened={isOpened}
            toggleDrawer={toggleDrawer}
          />
          {props.children}
        </DashboardContainer>
      </DashboardWrapper>
    </DashboardLayoutContainer>
  );
};

export default DashboardLayout;
