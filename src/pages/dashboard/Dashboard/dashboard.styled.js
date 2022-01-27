import styled from "styled-components";

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const DashboardCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  grid-row-gap: 20px;
  width: 100%;
  height: fit-content;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 45px 110px;
  margin-bottom: 40px;
  @media screen and (max-width: 1440px) {
    padding: 35px 50px;
    grid-row-gap: 15px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 1024px) {
    padding: 25px 50px;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 10px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5px;
    margin-bottom: 10px;
  }
`;

export const DashboardChartGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  grid-column-gap: 40px;
  width: 100%;
  height: fit-content;
  @media screen and (max-width: 1440px) {
    grid-column-gap: 30px;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
  }
`;

export const DashboardChart = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 25px 35px;
`;
