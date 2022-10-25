import React from "react";
import { Card, CardContent, Typography, Stack, Divider, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

import {BsFillTrashFill} from 'react-icons/bs';

import { useTheme } from "../../contexts/theme-context";

import { useMenu } from "../../contexts/crawlData-context";

interface Props {
  data: any
}

const getDate: (date: string) => Date = (date: string) => {
  const createdDate = new Date(date);

  return createdDate
}

const CardDetails = ({ data } : Props) => {
    const { activeTheme } = useTheme();
    const {RemoveCrawlData} = useMenu(); 

    const customTheme = {
      color: activeTheme,
      borderColor: activeTheme
    }

    const handleRemoveCard = () => {
      RemoveCrawlData(data?._id?.$oid)
    }

  

    const created = getDate(data?.created_at?.$date); 

    return (
   
        <Card sx={{width: '200px'}}>
          <CardContent>
            <Typography gutterBottom variant="h6">
              {data.name}
            </Typography>
            <Divider />
            <Stack flexDirection="column" justifyContent="space-between">
              <Typography variant="subtitle1">
                {created.toDateString()}
              </Typography>
            </Stack>  
          </CardContent>
          <CardActions>
            <Button onClick={handleRemoveCard}>
              <BsFillTrashFill/>
            </Button>
          </CardActions>
        </Card>
  );
};

export default CardDetails;
