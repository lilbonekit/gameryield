import styled from "styled-components";

export const CalculatorCardSliderContainer = styled.div`
  width: 100%;
`;

export const CalculatorSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 16px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background: transparent;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  :hover {
    opacity: 1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: transparent linear-gradient(270deg, #00f5fc 0%, #133afa 100%) 0%
      0% no-repeat padding-box;
    cursor: pointer;
  }
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;
