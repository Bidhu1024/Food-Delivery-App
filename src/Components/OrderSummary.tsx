import { Stack } from "@mui/material";
import React, { FC } from "react";
import { Typography } from "@mui/material";

interface IProps {
  Header: string;
  subtype: string;
}
const OrderSummary: FC<IProps> = ({ Header, subtype }) => {
  return (
    <Stack>
      <img src="" alt="" />
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
