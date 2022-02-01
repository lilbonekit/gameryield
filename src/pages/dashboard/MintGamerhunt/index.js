import React from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  MintGamerhuntBurnCard,
  MintGamerhuntContainer,
  MintGamerhuntMintCard,
  MintGamerhuntSlider,
  MintGamerhuntWrapper,
  MintGamerhuntActionGroup,
  MintGamerhuntChartGroup,
  StatsGroup,
  MintGamerhuntText,
  StatsAvatar,
  ChartGroup,
  ChartContent,
  MintGamerhuntSliderTextGroup,
  MintGamerhuntInfo,
  MintGamerhuntBurnAction,
  MintGamerhuntBurnActionButton,
  MintGamerhuntLargeText,
  MintGamerhuntMintCardContent,
  MintGamerhuntMintCardActionGroup,
  MintGamerhuntMintCardActionPart,
  MintGamerhuntMintCardActionCouple,
  MintGamerhuntMintCardETH,
  MintGamerhuntMintCardAction,
  MintGamerhuntMintCardAvatar,
  MintGamerhuntMintCardFooter,
  MintGamerhuntMiddleText,
  MintGamerhuntMintCardAvatarPart,
  MintGamerhuntMintCardAvatarText,
  MintGamerhuntMintCardFooterText,
  MintGamerhuntMintCardFooterTextCol,
  MintGamerhuntMintCardFooterAction,
  MintGamerhuntDaysInput,
  MintGamerhuntTraxInput,
} from "./mintgamerhunt.styled";
import Card from "../../../components/Card";
import Slider from "../../../components/Slider";
import MintLineChart from "../../../components/MintLineChart";
import {
  chart1,
  chart2,
  chart3,
  chart4,
  stats,
  footers,
  actions,
} from "./data";

const MintGamerhunt = () => {
  return (
    <MintGamerhuntWrapper>
      <MintGamerhuntContainer>
        <MintGamerhuntActionGroup>
          <MintGamerhuntBurnCard>
            <Tooltip title="Coming Soon">
              <MintGamerhuntInfo />
            </Tooltip>
            <MintGamerhuntMiddleText>
              Burn Erc tokens from Moose Trax or Wolfgame to guatantee High
              ranking hunter, Wolf or Moose
            </MintGamerhuntMiddleText>
            <MintGamerhuntBurnAction>
              <MintGamerhuntTraxInput />
              <MintGamerhuntBurnActionButton />
            </MintGamerhuntBurnAction>
            <MintGamerhuntMiddleText>
              Burn Trax or Wool to mint Legendary hunter, Alphawolf or
              Supermoose
            </MintGamerhuntMiddleText>
          </MintGamerhuntBurnCard>
          <MintGamerhuntMintCard>
            <MintGamerhuntLargeText>Mint Your Hunter</MintGamerhuntLargeText>
            <MintGamerhuntMintCardContent>
              <MintGamerhuntMintCardActionGroup>
                <MintGamerhuntMintCardActionPart>
                  <Tooltip title="Coming Soon">
                    <MintGamerhuntInfo />
                  </Tooltip>
                  <MintGamerhuntDaysInput />
                  <MintGamerhuntMintCardActionCouple>
                    <MintGamerhuntMintCardETH>5 ETH</MintGamerhuntMintCardETH>
                    <MintGamerhuntMintCardAction>
                      MINT!
                    </MintGamerhuntMintCardAction>
                  </MintGamerhuntMintCardActionCouple>
                </MintGamerhuntMintCardActionPart>
                <MintGamerhuntMintCardAvatar>
                  <Tooltip title="Coming Soon">
                    <MintGamerhuntInfo />
                  </Tooltip>
                  <MintGamerhuntMintCardAvatarPart />
                  <MintGamerhuntMintCardAvatarText>
                    You Minted:
                    <br />
                    Legendary Hunter
                  </MintGamerhuntMintCardAvatarText>
                </MintGamerhuntMintCardAvatar>
              </MintGamerhuntMintCardActionGroup>
              <MintGamerhuntMintCardFooter>
                <MintGamerhuntMintCardFooterText>
                  <MintGamerhuntMintCardFooterTextCol>
                    {footers.map((item, index) => (
                      <MintGamerhuntText key={index}>
                        {item.before}
                      </MintGamerhuntText>
                    ))}
                  </MintGamerhuntMintCardFooterTextCol>
                  <MintGamerhuntMintCardFooterTextCol>
                    {footers.map((item, index) => (
                      <MintGamerhuntText key={index}>
                        {item.symbol}
                      </MintGamerhuntText>
                    ))}
                  </MintGamerhuntMintCardFooterTextCol>
                  <MintGamerhuntMintCardFooterTextCol>
                    {footers.map((item, index) => (
                      <MintGamerhuntText key={index}>
                        {item.after}
                      </MintGamerhuntText>
                    ))}
                  </MintGamerhuntMintCardFooterTextCol>
                </MintGamerhuntMintCardFooterText>
                <MintGamerhuntMintCardFooterAction>
                  <MintGamerhuntMintCardFooterText>
                    <MintGamerhuntMintCardFooterTextCol>
                      {actions.map((item, index) => (
                        <MintGamerhuntText key={index}>
                          <input type="checkbox" />
                          {item.before}
                        </MintGamerhuntText>
                      ))}
                    </MintGamerhuntMintCardFooterTextCol>
                    <MintGamerhuntMintCardFooterTextCol>
                      {actions.map((item, index) => (
                        <MintGamerhuntText key={index}>
                          {item.symbol}
                        </MintGamerhuntText>
                      ))}
                    </MintGamerhuntMintCardFooterTextCol>
                    <MintGamerhuntMintCardFooterTextCol>
                      {actions.map((item, index) => (
                        <MintGamerhuntText key={index}>
                          {item.after}
                        </MintGamerhuntText>
                      ))}
                    </MintGamerhuntMintCardFooterTextCol>
                  </MintGamerhuntMintCardFooterText>
                  <Slider value="3" />
                </MintGamerhuntMintCardFooterAction>
              </MintGamerhuntMintCardFooter>
            </MintGamerhuntMintCardContent>
          </MintGamerhuntMintCard>
        </MintGamerhuntActionGroup>
        <Card title="Mintin stats" dir="true">
          {stats.map((item, index) => (
            <StatsGroup key={index}>
              <StatsAvatar src={item.avatar} />
              <MintGamerhuntText>{item.value}</MintGamerhuntText>
            </StatsGroup>
          ))}
        </Card>
        <MintGamerhuntSlider>
          <MintGamerhuntSliderTextGroup>
            <span>GEN 0</span>
            <span>GEN 1</span>
            <span>GEN 2</span>
            <span>GEN 3</span>
          </MintGamerhuntSliderTextGroup>
          <Slider value="3" />
        </MintGamerhuntSlider>
        <MintGamerhuntChartGroup>
          <Card title="500">
            <ChartGroup>
              {chart1.map((item, index) => (
                <MintLineChart
                  key={index}
                  value={item.value}
                  avatar={item.avatar}
                />
              ))}
            </ChartGroup>
            <ChartContent>100% legendary hunter mint probability</ChartContent>
          </Card>
          <Card title="2500">
            <ChartGroup>
              {chart2.map((item, index) => (
                <MintLineChart
                  key={index}
                  value={item.value}
                  avatar={item.avatar}
                />
              ))}
            </ChartGroup>
            <ChartContent>
              20% legendary hunter mint probability. 80% WOLF AND MOOSE{" "}
            </ChartContent>
          </Card>
          <Card title="7000">
            <ChartGroup>
              {chart3.map((item, index) => (
                <MintLineChart
                  key={index}
                  value={item.value}
                  avatar={item.avatar}
                />
              ))}
            </ChartGroup>
            <ChartContent>
              5% legendary HUNTER mint probability. 95% WOLF AND MOOSE{" "}
            </ChartContent>
          </Card>
          <Card title="10000">
            <ChartGroup>
              {chart4.map((item, index) => (
                <MintLineChart
                  key={index}
                  value={item.value}
                  avatar={item.avatar}
                />
              ))}
            </ChartGroup>
            <ChartContent>
              2% legendary HUNTER mint probability. 98% WOLF AND MOOSE{" "}
            </ChartContent>
          </Card>
        </MintGamerhuntChartGroup>
      </MintGamerhuntContainer>
    </MintGamerhuntWrapper>
  );
};

export default MintGamerhunt;
