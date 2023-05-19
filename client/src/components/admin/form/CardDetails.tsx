import { Card, CardContent, Typography, Stack, Divider, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useMenu } from "../../../contexts/crawl-context/crawl-data-context";
import { deleteCrawlData, baseUrl } from "../../../lib/http-request";

interface Props {
  data: any,
  FaSpider: any,
  BsFillTrashFill: any,
  AiFillEdit: any
}

const getDate: (date: string) => Date = (date: string) => {
  const createdDate = new Date(date);

  return createdDate
}

const CardDetails = ({ data, FaSpider, BsFillTrashFill, AiFillEdit }: Props) => {
  const { RemoveCrawlData } = useMenu();

  const handleRemoveCard = () => {
    const id = data?.id;
    // Change On Client 
    RemoveCrawlData(id);
    
    deleteCrawlData(`${baseUrl}/delete_crawler`, id);
  }

  // const created = getDate(data?.created_at) || new Date();

  return (
    <Card className="z-1" sx={{ width: '200px' }}>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {data?.name?.length < 15 ? data.name : (data?.name?.slice(0, 11) + '...')}
        </Typography>
        <Divider />
        <Stack flexDirection="column" justifyContent="space-between">
          <Typography variant="subtitle1">
            {/* {created?.toDateString()} */}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{display: 'inline-grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        <Button>
          <FaSpider />
        </Button>
        <Button onClick={handleRemoveCard}>
          <BsFillTrashFill />
        </Button>
        <Link to={`form/${data?.id}`}>
          <Button >
            <AiFillEdit />
          </Button>
        </Link> 

      </CardActions>
    </Card>
  );
};

export default CardDetails;
