import React, { useEffect, useState } from "react";
import Slider from "../../../components/Slider";
import TextGroup from "../../../components/TextGroup";
import { DashboardLayout } from "../../../layouts";
import {
  CalculatorCard,
  CalculatorCardFooter,
  CalculatorCardFooterName,
  CalculatorCardFooterValue,
  CalculatorCardGMLRETHInput,
  CalculatorCardHeader,
  CalculatorCardInput,
  CalculatorCardInputGroup,
  CalculatorCardPooledETHInput,
  CalculatorCardSliderGroup,
  CalculatorCardSymbol,
  CalculatorContent,
  CalculatorTitle,
} from "./calculator.styled";
import { texts, names, values } from "./data";

const Calculator = () => {
  const [days, setDays] = useState(1);
  const [pooledeth, setPooledeth] = useState(1);
  const [eth, setEth] = useState(0.5);
  const [gmlr, setGmlr] = useState(12500);
  const [percent, setPercent] = useState(12500);

  useEffect(() => {
    setEth(0.5 * pooledeth);
    setGmlr(12500 * pooledeth);
    setPercent(12500 * pooledeth);
  }, [pooledeth]);

  useEffect(() => {
    if (days >= 6 && days < 12) {
      setGmlr(percent * 1.5);
    } else if (days == 12) {
      setGmlr(percent * 2);
    } else {
      setGmlr(percent);
    }
  }, [days]);

  return (
    <DashboardLayout title="CALCULATOR" width="300px">
      <CalculatorContent>
        <CalculatorTitle>Estimate your returns</CalculatorTitle>
        <CalculatorCard>
          <CalculatorCardHeader>
            {texts.map((item, index) => (
              <TextGroup
                key={index}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </CalculatorCardHeader>
          <CalculatorCardInputGroup>
            <CalculatorCardPooledETHInput>
              <span>PooledETH</span>
              <CalculatorCardInput
                type="text"
                onChange={(e) => {
                  setPooledeth(e.target.value);
                }}
                name="pooledeth"
                value={pooledeth}
                color="#123CFA"
              />
            </CalculatorCardPooledETHInput>
            <CalculatorCardSymbol>{">"}</CalculatorCardSymbol>
            <CalculatorCardGMLRETHInput>
              <span>ETH</span>
              <CalculatorCardInput
                type="text"
                name="eth"
                value={eth}
                color="#01F3FC"
                disabled
              />
            </CalculatorCardGMLRETHInput>
            <CalculatorCardGMLRETHInput>
              <span>GMLR</span>
              <CalculatorCardInput
                type="text"
                name="gmlr"
                value={gmlr}
                color="#01F3FC"
                disabled
              />
            </CalculatorCardGMLRETHInput>
          </CalculatorCardInputGroup>
          <CalculatorCardSliderGroup>
            <span>{days} months</span>
            <Slider value={days} setDays={setDays} />
          </CalculatorCardSliderGroup>
          <CalculatorCardFooter>
            <CalculatorCardFooterName>
              {names.map((item, index) => (
                <span key={index}>{item.name}</span>
              ))}
            </CalculatorCardFooterName>
            <CalculatorCardFooterValue>
              {values.map((item, index) => (
                <span key={index}>{item.value}</span>
              ))}
            </CalculatorCardFooterValue>
          </CalculatorCardFooter>
        </CalculatorCard>
      </CalculatorContent>
    </DashboardLayout>
  );
};

export default Calculator;
