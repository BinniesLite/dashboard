export const PAGESIZE = 12;
/*
    calculatePage

    @params:
*/

export const calculatePage = (totalCount: number, pageSize: number) => {
    const pages: number = (totalCount + pageSize - 1) / pageSize; 
    return Math.round(pages); 
}