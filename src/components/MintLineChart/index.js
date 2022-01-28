import React from "react";
import LineChart from "../LineChart";
import {
  MintLineChartAvatar,
  MintLineChartContainer,
  MintLineChartTitle,
} from "./mintlinechart.styled";

const MintLineChart = (props) => {
  return (
    <MintLineChartContainer>
      <MintLineChartTitle>
        {props.value}
        {"%"}
      </MintLineChartTitle>
      <LineChart value={props.value} />
      <MintLineChartAvatar src={props.avatar} />
    </MintLineChartContainer>
  );
};

export default MintLineChart;
