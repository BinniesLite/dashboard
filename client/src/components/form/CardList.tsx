import React, {memo} from "react";

import { Stack } from "@mui/material";

import CardDetails from "./CardDetails";

import { DemoCrawlData } from "../../../types";

interface Props {
  datas: DemoCrawlData[]
}

const CardList = ({ datas }: Props) => {
  return (
    <Stack
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      mt={3}
      gap={4}
      flexDirection="row"
    >
      {datas?.map((data, i) => (
        <CardDetails data={data} key={i} />
      ))}
    </Stack>
  );
};

export default memo(CardList);
