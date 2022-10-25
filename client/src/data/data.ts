import { DemoCrawlData } from "../../types"

export const dummy = [
    {
        url: 'tiki.vn',
        selector: [{key: 'thingies', value: 'thigies value'}]
    },
    {
        url: 'shoppee.vn',
        selector: [{key: 'stuffy', value: 'stuffy value'}]
    }
]



export const dummyCrawl: DemoCrawlData[] = [
    {
        name: 'example name',
        description: '... Description content',
        attributes: [
            {
                name: 'Product', value: 'Hello World'
            }
        ],
        created_at: {
            $date: ''
        }
    },
    {
        name: 'example name 2',
        description: '... Description content',
        attributes: [
            {
                name: 'Product', value: 'Hello World'
            }
        ],
        created_at: {
            $date: ''
        }
    }
]