import React, { useState, useContext, createContext } from "react";
import { dummy, dummyCrawl } from "../data/data";
import { CrawlData, DemoCrawlData } from "../../types";

interface Props {
    children: React.ReactNode
}

interface MenuContextInterface {
    crawlDatas: DemoCrawlData[],
    setCrawlDatas: React.Dispatch<React.SetStateAction<DemoCrawlData[]>>,
    RemoveCrawlData: (id: string) => void
}

const MenuContext = createContext({} as MenuContextInterface);

const MenuProvider = ({ children }: Props ) => {
  const [crawlDatas, setCrawlDatas] = useState<DemoCrawlData[]>(dummyCrawl);    


  // Remove item with that id
  const RemoveCrawlData = (id: string) => {
    const newCrawlData = crawlDatas.filter((item) => item?._id?.$oid !== id);
    setCrawlDatas(newCrawlData);
  }


  const data: MenuContextInterface = {
    crawlDatas,
    setCrawlDatas,
    RemoveCrawlData
  };
  
  return <MenuContext.Provider value={data}>
    {children}
    </MenuContext.Provider>;
};

// custom hooks
export const useMenu = () => useContext(MenuContext);

export default MenuProvider;
