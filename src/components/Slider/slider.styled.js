import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
`;

export const SliderContent = styled.input`
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
    ::after,
    ::before {
      content: "";
      position: absolute;
      height: 0;
      width: 0;
      top: 0;
      border-top: 90px solid transparent;
      border-bottom: 90px solid transparent;
    }
  }
  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
  @media screen and (max-width: 1440px) {
    height: 14px;
    ::-webkit-slider-thumb {
      width: 20px;
      height: 20px;
    }
    ::-moz-range-thumb {
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (max-width: 768px) {
    height: 12px;
    ::-webkit-slider-thumb {
      width: 18px;
      height: 18px;
    }
    ::-moz-range-thumb {
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (max-width: 425px) {
    height: 8px;
    ::-webkit-slider-thumb {
      width: 12px;
      height: 12px;
    }
    ::-moz-range-thumb {
      width: 12px;
      height: 12px;
    }
  }
`;
