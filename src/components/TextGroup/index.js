import React from "react";
import {
  TextGroupContainer,
  TextSubText,
  TextSubTitle,
  TextSubTitleGroup,
  TextTitle,
  TextTitleGroup,
  TextTitleIcon,
} from "./textgroup.styled";

const TextGroup = (props) => {
  return (
    <TextGroupContainer align={props.align}>
      <TextTitleGroup>
        <TextTitle>{props.title}</TextTitle>
        {props.icon && <TextTitleIcon>{props.icon}</TextTitleIcon>}
      </TextTitleGroup>
      <TextSubTitleGroup>
        <TextSubTitle>{props.subtitle}</TextSubTitle>
        {props.subtext && <TextSubText>{props.subtext}</TextSubText>}
      </TextSubTitleGroup>
    </TextGroupContainer>
  );
};

export default TextGroup;
