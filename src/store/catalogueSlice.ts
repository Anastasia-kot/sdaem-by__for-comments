// RTK don't use because use getServerSideProps  

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CatalogueType } from '../../types/catalogue_data'

export interface CatalogueState {
    items: CatalogueType[] | null,
    totalCount: number | null,
}

const initialState: CatalogueState = {
    items: null,
    totalCount: null,
}

export const CatalogueSlice = createSlice({
    name: 'Catalogue',
    initialState,
    reducers: {
        setCatalogue: (state, action: PayloadAction<Array<CatalogueType>>) => {
            state.items = action.payload
        },
        setTotalCount: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload
        },
    },
})

export const { setCatalogue, setTotalCount } = CatalogueSlice.actions

export default CatalogueSlice.reducer