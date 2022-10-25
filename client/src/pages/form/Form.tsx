import React, { useState, MouseEvent, useCallback, useEffect } from "react";

import { Button } from "@mui/material";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LayoutPage, Header } from "../../layout";
import FormModal from "./FormModal";
import CardList from "./CardList";
// Context
import { useMenu } from "../../contexts/crawlData-context";
import { useTheme } from "../../contexts/theme-context";
// Types
import { DemoCrawlData } from "../../../types";

import {baseUrl, fetchAPI} from '../../utils/fetchAPI';

// Deal with form
const Form = () => {
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const {crawlDatas, setCrawlDatas} = useMenu();
  const {activeTheme} = useTheme();

  const handleActiveDialog: () => void = useCallback(() => {
    setActiveDialog((prev) => !prev);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = await fetchAPI(baseUrl);
      setCrawlDatas(responseData);
    }
  
    fetchData();
  }, [])
  

  const handleSubmitData = (data: DemoCrawlData, e: MouseEvent ) => {
    e.preventDefault();
    // Add created_at field into 
    console.log(data)
    setCrawlDatas && setCrawlDatas(prev => [...prev, data]); 

    handleActiveDialog();    
  };

  return (
    <LayoutPage>
      <Header title="Form" category="app" />
      <Button
        sx={{ marginTop: 3, color: activeTheme, borderColor: activeTheme }}
        variant="outlined"
        onClick={handleActiveDialog}
      >
        <AiOutlinePlusSquare />
      </Button>
      <FormModal
        color={activeTheme}  
        activeDialog={activeDialog}
        handleActiveDialog={handleActiveDialog}
        handleSubmitData={handleSubmitData}
      />

      <CardList datas={crawlDatas} />
    </LayoutPage>
  );
};

export default Form;
