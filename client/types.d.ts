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
    url: string,
    Attributes: Attributes[]
}

export interface DemoCrawlData {    
    name?: string,
    url?: string,
    description?: string,
    attributes?: Attributes[],
    created_at?: string,
    id?: number
}