// RTK don't use because use getServerSideProps  

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { NewsType } from '../../types/news_data'

export interface NewsState {
    data: Array<NewsType> | null,
    totalCount: number | null,
    searchWord: string | null
}


const initialState: NewsState = {
    data: null,
    totalCount: 13,
    searchWord:  null,
}

export const NewsSlice = createSlice({
    name: 'News',
    initialState,
    reducers: {
        setNews: (state, action: PayloadAction<Array<NewsType>>) => {
            state.data = action.payload
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload
        },
        setSearchWord: (state, action: PayloadAction<string>) => {
            state.searchWord = action.payload
        },

    },
})

export const { setNews, setTotalCount, setSearchWord } = NewsSlice.actions

export default NewsSlice.reducer