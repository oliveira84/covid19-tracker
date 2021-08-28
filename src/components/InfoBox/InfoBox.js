import React from 'react';
import {Wrapper} from "./InfoBoxStyles";
import {Card, CardContent, Typography} from "@material-ui/core";
import numeral from "numeral";

const InfoBox = ({title, cases, total}) => {
  return (
    <Wrapper title={title}>
      <Card>
        <CardContent>
          <Typography color={"textSecondary"} className={"title"}><strong>{title}</strong></Typography>
          {cases > 0 ? <h2 className={"cases"}>+{numeral(cases).format("0,0")}</h2> :
            <Typography color={"textSecondary"}>Not available yet</Typography>}
          <Typography color={"textSecondary"} className={"total"}>{numeral(total).format("0,0")}</Typography>
        </CardContent>
      </Card>
    </Wrapper>
  );
}

export default InfoBox;