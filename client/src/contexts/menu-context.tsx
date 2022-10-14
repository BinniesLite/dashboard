import React, { useState, useContext, createContext } from "react";
import { dummy } from "../data/data";
import { CrawlData } from "../../types";

interface Props {
    children: React.ReactNode
}

interface MenuContextInterface {
    crawlDatas: CrawlData[],
    setCrawlDatas: React.Dispatch<React.SetStateAction<CrawlData[]>>
}

const MenuContext = createContext({} as MenuContextInterface);

const MenuProvider = ({ children }: Props ) => {
  const [crawlDatas, setCrawlDatas] = useState<CrawlData[]>(dummy);    
  
  const data: MenuContextInterface = {
    crawlDatas,
    setCrawlDatas
  };
  
  return <MenuContext.Provider value={data}>
    {children}
    </MenuContext.Provider>;
};

// custom hooks
export const useMenu = () => useContext(MenuContext);

export default MenuProvider;
