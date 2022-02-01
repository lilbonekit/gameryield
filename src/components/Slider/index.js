import React from "react";
import { SliderContainer, SliderContent } from "./slider.styled";

const Slider = (props) => {
  return (
    <SliderContainer>
      <SliderContent
        type="range"
        min="1"
        max="12"
        defaultValue={props.value}
        onChange={(e) => props.setDays(e.target.value)}
      />
    </SliderContainer>
  );
};

export default Slider;
