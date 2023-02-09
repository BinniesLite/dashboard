import React from 'react';

export interface Links {
    title: string,
    links: [{
        name: string,
        icon: React.ReactNode
    }]
}
interface Attributes {
    key: string, value: string
}

export interface CrawlData {
    data: DemoCrawlData[],
    lastPage?: number,
    page?: number, 
    total?: number
}   
export interface DemoCrawlData {    
    name?: string,
    url?: string,
    description?: string,
    attributes?: Attributes[],
    createdAt?: string,
    id?: number
}
