import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { DashboardGraphContainer } from "./dashboardgraph.styled";

const data = [
  {
    name: "Nov 19",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec 20",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const DashboardGraph = (props) => {
  return (
    <DashboardGraphContainer>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 30,
          }}
        >
          <XAxis dataKey="name" axisLine={false} />
          <YAxis axisLine={false} />
          <Area dataKey="uv" stroke={props.fillcolor} fill={props.fillcolor} />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardGraphContainer>
  );
};

export default DashboardGraph;
