import { Stack } from "@mui/material";
import React, { FC } from "react";
import { Typography } from "@mui/material";

interface IProps {
  Header: string;
  subtype: string;
  src: string;
}
const OrderSummary: FC<IProps> = ({ Header, subtype,src }) => {
  return (
    <Stack boxShadow={"2"} padding={".5rem"}>
      <img src={src} alt="image not found" height={"200"} width={"200"} />
      <Typography fontWeight="bold" fontSize={"1.2rem"}>
        {Header}
      </Typography>
      <Typography textAlign="center" fontWeight="bold" fontSize={"12px"}>
        {subtype}
      </Typography>
    </Stack>
  );
};

export default OrderSummary;
