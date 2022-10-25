import React from 'react';

export interface Links {
    title: string,
    links: [{
        name: string,
        icon: React.ReactNode
    }]
}
interface Attributes {
    name: string, value: string
}

export interface CrawlData {
    url: string,
    Attributes: Attributes[]
}

export interface DemoCrawlData {    
    name?: string,
    description?: string,
    attributes?: Attributes[],
    createdAt?: {
        $date: string
    }
    _id?: {
        $oid: string
    }
}