import styled from "styled-components";

export const DashboardGraphContainer = styled.div`
  font-size: 14px;
  width: 90%;
  height: 300px;
  @media screen and (max-width: 1440px) {
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    height: 350px;
  }
  @media screen and (max-width: 425px) {
    height: 200px;
    font-size: 12px;
  }
`;
