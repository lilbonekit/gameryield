import React from "react";
import {
  UnstakeTokenBalanceContainer,
  UnstakeTokenInfo,
  UnstakeTokenName,
  UnstakeTokenValue,
} from "./unstaketokenbalance.styled";

const UnstakeTokenBalance = (props) => {
  return (
    <UnstakeTokenBalanceContainer flag={props.flag}>
      <UnstakeTokenInfo>
        <UnstakeTokenName>{props.token}</UnstakeTokenName>
        <UnstakeTokenValue>{props.balance}</UnstakeTokenValue>
      </UnstakeTokenInfo>
    </UnstakeTokenBalanceContainer>
  );
};

export default UnstakeTokenBalance;
