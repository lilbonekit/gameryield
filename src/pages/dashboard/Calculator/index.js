import React, { useState } from "react";
import CalculatorCardSlider from "../../../components/CalculatorCardSlider";
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
  const [state, setState] = useState({
    pooledeth: 12,
    gmlrone: 8.4,
    gmlrtwo: 129.81,
  });

  const handleInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

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
                onChange={handleInputChange}
                name="pooledeth"
                value={state.pooledeth}
                color="#123CFA"
              />
            </CalculatorCardPooledETHInput>
            <CalculatorCardSymbol>{">"}</CalculatorCardSymbol>
            <CalculatorCardGMLRETHInput>
              <span>GMLR</span>
              <CalculatorCardInput
                type="text"
                onChange={handleInputChange}
                name="gmlrone"
                value={state.gmlrone}
                color="#01F3FC"
              />
            </CalculatorCardGMLRETHInput>
            <CalculatorCardGMLRETHInput>
              <span>GMLR</span>
              <CalculatorCardInput
                type="text"
                onChange={handleInputChange}
                name="gmlrtwo"
                value={state.gmlrtwo}
                color="#01F3FC"
              />
            </CalculatorCardGMLRETHInput>
          </CalculatorCardInputGroup>
          <CalculatorCardSliderGroup>
            <span>30 days</span>
            <CalculatorCardSlider />
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
