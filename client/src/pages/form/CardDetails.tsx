import React from "react";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { useTheme } from "../../contexts/theme-context";

interface Props {
  data: any
}

const CardDetails = ({ data } : Props) => {
    const { activeTheme } = useTheme();

    return (
    <Link to={`/form/${data.url}`}>
        <Card  
            className="hover:drop-shadow-sm ease-in-out duration-300"
            sx={{backgroundColor: activeTheme, cursor: "pointer", width: "170px", height: "150px" }}>
          <CardContent>
            <Typography variant="h5">{data.url}</Typography>
          </CardContent>
        </Card>
    </Link>
  );
};

export default CardDetails;
