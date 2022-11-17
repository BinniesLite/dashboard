import React, { useState, MouseEvent, useCallback, useEffect } from "react";
import { Button } from "@mui/material";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LayoutPage, Header } from "../../../layout";
import FormModal from "../../../components/admin/form/FormModal";
import CardList from "../../../components/admin/form/CardList";
import PaginationCustom from "../../../components/admin/form/PaginationCustom";
// Context
import { useMenu } from "../../../contexts/crawl-data-context";
import { useTheme } from "../../../contexts/theme-context";
// Types
import { DemoCrawlData } from "../../../../types";
// API
import {baseUrl, fetchAPI, updateCrawlData} from '../../../utils/http-request';
// Utils 
import { calculatePage, PAGESIZE } from "../../../utils/page-count";

// Deal with form
const Form = () => {
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const {crawlDatas, setCrawlDatas} = useMenu();
  const {activeTheme} = useTheme();

  const handleActiveDialog: () => void = useCallback(() => {
    setActiveDialog((prev) => !prev);
  }, []);

  // Change upon page change
  useEffect(() => {
    const fetchData = async () => {
      const responseData = await fetchAPI(`${baseUrl}/list/`);
      setCrawlDatas(responseData?.results);
    }
  
    fetchData();
  }, [page])

  // Pagination total pages 
  const total_pages: number = crawlDatas && calculatePage(crawlDatas.length, PAGESIZE);
  console.log(total_pages);
  const handleSubmitData: (data: DemoCrawlData, e: MouseEvent) => void = (data, e) => {
    e.preventDefault();
    // Update on client 
    setCrawlDatas && setCrawlDatas(prev => [...prev, (data)]); 
    // Update data on server
    updateCrawlData(baseUrl, data)
    // Close Modal
    handleActiveDialog();    
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    console.log(page);
  }

  return (
    <LayoutPage>
      <Header title="Form" category="app" />
      <Button
        sx={{ marginTop: 3, color: activeTheme, borderColor: activeTheme }}
        variant="outlined"
        onClick={handleActiveDialog} >
        <AiOutlinePlusSquare />
      </Button>

      <FormModal
        color={activeTheme}  
        activeDialog={activeDialog}
        handleActiveDialog={handleActiveDialog}
        handleSubmitData={handleSubmitData}
      />

      <CardList datas={crawlDatas} />
      <PaginationCustom 
        page={page} 
        handlePageChange={handlePageChange} 
        count={total_pages} 
      />
    </LayoutPage>
  );
};

export default Form;
