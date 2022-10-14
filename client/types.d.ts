import React from 'react';


export interface Links {
    title: string,
    links: [{
        name: string,
        icon: React.ReactNode
    }]
}
interface Selector {
    key: string, value: string
}

export interface CrawlData {
    url: string,
    selector: Selector[]
}