import React, { useState, MouseEvent, useCallback, useEffect, Suspense, lazy } from "react";
// Styling
import { Button, Skeleton } from "@mui/material";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LayoutPage, Header } from "../../../layout";
// Components
const FormModal = lazy(() => import("../../../components/admin/form/FormModal"))
import CardList from "../../../components/admin/form/CardList";
import PaginationCustom from "../../../components/admin/form/PaginationCustom";
// Context
import { useMenu } from "../../../contexts/crawl-context/crawl-data-context";
import { useTheme } from "../../../contexts/theme-context";
// Types
import { DemoCrawlData } from "../../../../types";
// API
import { baseUrl, getAllCrawlData, postCrawlData } from '../../../lib/http-request';


const FormPage = () => {
  const [activeDialog, setActiveDialog] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {crawlDatas, setCrawlDatas} = useMenu();
  const {activeTheme} = useTheme();
  
  const handleActiveDialog: () => void = useCallback(() => {
    setActiveDialog((prev) => !prev);
  }, []);

  // Fetch again when page change
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      
      const responseData = await getAllCrawlData(`${baseUrl}/list/`);
      
      setIsLoading(false);
      
      setCrawlDatas(responseData);
      // setLastPage(responseData?.lastPage);
    }
  
    fetchData();
  }, [page])

  // Pagination total pages 
  
  // TODO: Why does this take me song long tho
  const handleSubmitData: (data: DemoCrawlData, e: MouseEvent) => void = (data, e) => {
    e.preventDefault();
    // Update on client 
    // setCrawlDatas && setCrawlDatas(prev => [...prev, (data)]); 
    
    // post data on server
    postCrawlData(`${baseUrl}/create_crawler/`, data)
    
    // Close Modal
    handleActiveDialog();    
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  }

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
      {activeDialog && 
        <Suspense fallback={<div>Loading...</div>}>
          <FormModal
            color={activeTheme}  
            activeDialog={activeDialog}
            handleActiveDialog={handleActiveDialog}
            handleSubmitData={handleSubmitData}
        />
        </Suspense>
      }
      <PaginationCustom 
        page={page} 
        handlePageChange={handlePageChange} 
        count={lastPage} 
      />
      {isLoading 
        ? <Skeleton variant="rounded" width="full" height={60} /> 
      : <CardList datas={crawlDatas} />
      }

      <PaginationCustom 
        page={page} 
        handlePageChange={handlePageChange} 
        count={lastPage} 
      />
    </LayoutPage>
  );
};

export default FormPage;
