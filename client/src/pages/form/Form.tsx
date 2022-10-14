import React, { useState, MouseEvent } from "react";
// 
import { Button } from "@mui/material";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LayoutPage, Header } from "../../layout";
import FormModal from "./FormModal";
import CardList from "./CardList";
// Context
import { useMenu } from "../../contexts/menu-context";
import { useTheme } from "../../contexts/theme-context";
// Types
import { CrawlData } from "../../../types";
// Theme

// Deal with form
const Form = () => {
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const {crawlDatas, setCrawlDatas} = useMenu();
  const {activeTheme} = useTheme();


  const handleActiveDialog = () => {
    setActiveDialog((prev) => !prev);
  };

  
  const handleSubmitData = (data: CrawlData, e: MouseEvent ) => {
    e.preventDefault();
    console.log(data)
    
    setCrawlDatas && setCrawlDatas(prev => [...prev, data]); 
    console.log(crawlDatas);
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
