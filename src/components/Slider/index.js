import React from "react";
import { SliderContainer, SliderContent } from "./slider.styled";

const Slider = (props) => {
  return (
    <SliderContainer>
      <SliderContent
        type="range"
        min="1"
        max="100"
        defaultValue={props.value}
      />
    </SliderContainer>
  );
};

export default Slider;
