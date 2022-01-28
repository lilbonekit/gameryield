import React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { LineChartContainer } from "./linechart.styled";

const LineChart = (props) => {
  const data = [{ value: props.value }];

  return (
    <LineChartContainer>
      <ResponsiveContainer>
        <BarChart data={data} barSize={15}>
          <Bar
            dataKey="value"
            fill="#00F5FC"
            background={{ fill: "#09496C" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </LineChartContainer>
  );
};

export default LineChart;
