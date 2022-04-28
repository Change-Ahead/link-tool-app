export interface SearchResponse {
    accepted: SearchItem[]
    rejected: SearchItem[]
    autoAccepted: SearchItem[]
    autoRejected: SearchItem[]
}

interface SearchItem {
    id: string,
    url: string,
    searchCriteria: {
        category: string,
        subCategory: string,
        location: string,
        keywords: string
    },
    title: string,
    description: [
        string
    ],
    user: string,
    metatags: [
        {
            name: string,
            content: string
        }
    ],
    searchTime: Date,
    status: string,
    probabilityAccepted: number,
    location: {
        address: string,
        postcode: string,
        latitude: number,
        longitude: number,
        phoneNumber: string
    },
    physical: boolean
}