import React, { useState, useContext, createContext } from "react";
import { DemoCrawlData } from "../../../types";

interface Props {
    children: React.ReactNode
}

interface IMenuContextInterface {
    crawlDatas: DemoCrawlData[],
    setCrawlDatas: React.Dispatch<React.SetStateAction<DemoCrawlData[]>>,
    RemoveCrawlData: (id: number) => void
}

const MenuContext = createContext({} as IMenuContextInterface);

const MenuProvider = ({ children }: Props ) => {
  const [crawlDatas, setCrawlDatas] = useState<DemoCrawlData[]>([] as DemoCrawlData[]);    

  // Remove item with that id
  const RemoveCrawlData = (id: number) => {
    const newCrawlData = crawlDatas.filter((item) => item?.id !== id);
    setCrawlDatas(newCrawlData);
  }

  const data: IMenuContextInterface = {
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
