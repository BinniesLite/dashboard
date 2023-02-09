import { memo } from "react";
import Stack from "@mui/material/Stack";
import CardDetails from "./CardDetails";
import { DemoCrawlData } from "../../../../types";
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { FaSpider } from 'react-icons/fa';
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
      gap={3}
      flexDirection="row"
    >
      {datas?.map((data, i) => (
        <CardDetails data={data} FaSpider={FaSpider} BsFillTrashFill={BsFillTrashFill} AiFillEdit={AiFillEdit} key={i} />
      ))}
    </Stack>
  );
};

export default memo(CardList);
