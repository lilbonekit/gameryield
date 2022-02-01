import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  width: 100%;
  background-color: #121a3a;
  @media screen and (max-width: 700px) {
    width: 75%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 18px;
  padding: 12px 0;
  background-color: #132359;
  @media screen and (max-width: 1440px) {
    padding: 10px;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    padding: 8px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding: 6px;
    font-size: 12px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.dir ? "row" : "column")};
  justify-content: ${(props) => (props.dir ? "space-around" : "auto")};
  align-items: center;
  width: 100%;
  padding: 20px 0;
  background-color: inherit;
  @media screen and (max-width: 1440px) {
    padding: 16px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 14px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 12px 0;
  }
`;
