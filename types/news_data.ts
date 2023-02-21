
export interface NewsType {
    id: number
    image: string | null
    title: string
    shortDescription: string
    description: Array<string>
    date: string // string as ISO Date  '1995-12-17'
}

export interface NewsState {
    items: Array<NewsType> | null,
    totalCount: number | null,
}
