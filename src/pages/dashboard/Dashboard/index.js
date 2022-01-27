import React from "react";
import { DashboardLayout } from "../../../layouts";
import {
  DashboardCard,
  DashboardChart,
  DashboardChartGroup,
  DashboardContent,
} from "./dashboard.styled";
import TextGroup from "../../../components/TextGroup";

import { cards, charts } from "./data";
import DashboardGraph from "../../../components/DashboardGraph";

const Dashboard = () => {
  return (
    <DashboardLayout title="DASHBOARD" width="300px">
      <DashboardContent>
        <DashboardCard>
          {cards.map((item, index) => (
            <TextGroup
              key={index}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </DashboardCard>
        <DashboardChartGroup>
          {charts.map((item, index) => (
            <DashboardChart key={index}>
              <TextGroup
                title={item.title}
                icon={item.icon}
                subtitle={item.subtitle}
                subtext={item.subtext}
                align={true}
              />
              <DashboardGraph fillcolor={item.fillcolor} />
            </DashboardChart>
          ))}
        </DashboardChartGroup>
      </DashboardContent>
    </DashboardLayout>
  );
};

export default Dashboard;
