import React from "react";
import {
  CalculatorCardSliderContainer,
  CalculatorSlider,
} from "./calculatorcardslider.styld";

const CalculatorCardSlider = () => {
  return (
    <CalculatorCardSliderContainer>
      <CalculatorSlider type="range" min="1" max="100" />
    </CalculatorCardSliderContainer>
  );
};

export default CalculatorCardSlider;
