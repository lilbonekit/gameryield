import React from "react";
import { CardContainer, CardContent, CardTitle } from "./card.styled";

const Card = (props) => {
  return (
    <CardContainer>
      <CardTitle>{props.title}</CardTitle>
      <CardContent dir={props.dir}>{props.children}</CardContent>
    </CardContainer>
  );
};

export default Card;
