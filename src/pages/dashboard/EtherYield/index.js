import React from "react";
import ComingSoon from "../../../components/ComingSoon";
import { DashboardLayout } from "../../../layouts";
import { EtherYieldContent } from "./etheryield.styled";

const EtherYield = () => {
  return (
    <DashboardLayout title="Ether Yield(Dividends)" width="510px">
      <EtherYieldContent>
        <ComingSoon />
      </EtherYieldContent>
    </DashboardLayout>
  );
};

export default EtherYield;
