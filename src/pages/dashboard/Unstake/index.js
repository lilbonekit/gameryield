import React from "react";
import { MdInfoOutline } from "react-icons/md";
import TextGroup from "../../../components/TextGroup";
import { DashboardLayout } from "../../../layouts";
import {
  UnstakeCard,
  UnstakeContent,
  UnstakeTokenAction,
  UnstakeTokenActionBurnContent,
  UnstakeTokenActionClaimContent,
  UnstakeTokenActionGroup,
  UnstakeTokenActionSection,
  UnstakeTokenActionSubTitle,
  UnstakeTokenActionTitle,
  UnstakeTokenPolygon,
} from "./unstake.styled";
import UnstakeTokenBalance from "../../../components/UnstakeTokenBalance";
import { tokens } from "./data";

const Unstake = () => {
  return (
    <DashboardLayout title="Burn NFT I Unstake LP" width="510px">
      <UnstakeContent>
        <UnstakeCard>
          <TextGroup
            title="Time Left"
            icon={<MdInfoOutline />}
            subtitle="12 month : 3 days : 2 hours : 5 min"
          />
        </UnstakeCard>
        <UnstakeTokenActionGroup>
          <UnstakeTokenActionSection>
            <UnstakeTokenActionTitle>
              Unstake LP / Burn NFT <MdInfoOutline />
            </UnstakeTokenActionTitle>
            <UnstakeTokenActionSubTitle>
              Leave NFT toke to continue receiving rewards <br />
              Or burn NFT to release your liquidity tokens
            </UnstakeTokenActionSubTitle>
            <UnstakeTokenActionBurnContent>
              Select NFT to burn
            </UnstakeTokenActionBurnContent>
            <UnstakeTokenPolygon />
            <UnstakeTokenAction flag={true}>BURN NFT</UnstakeTokenAction>
          </UnstakeTokenActionSection>
          <UnstakeTokenActionSection>
            <UnstakeTokenActionTitle>
              Claim GMLR rewards <MdInfoOutline />
            </UnstakeTokenActionTitle>
            <UnstakeTokenActionClaimContent>
              {tokens.map((item, index) => (
                <UnstakeTokenBalance
                  key={index}
                  token={item.token}
                  balance={item.balance}
                  flag={item.flag}
                />
              ))}
            </UnstakeTokenActionClaimContent>
            <UnstakeTokenAction flag={false}>
              Claim GMLR Rewards
            </UnstakeTokenAction>
          </UnstakeTokenActionSection>
        </UnstakeTokenActionGroup>
      </UnstakeContent>
    </DashboardLayout>
  );
};

export default Unstake;
