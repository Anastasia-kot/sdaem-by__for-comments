import styles from './CatalogueList.module.scss'
import React, { FC, useEffect, useState } from 'react'
import { PaginatedItems } from '../../../shared/ui/Pagination/Pagination'
import { Socials_sharing } from '../../../shared/ui/Socials_sharing/Socials_sharing'

import { useForm } from 'react-hook-form'
import { CatalogueCard } from '../../../entities/CatalogueCard/CatalogueCard'
import { CatalogueState, CatalogueType } from '../../../../types/catalogue_data'
import { FiltersPayloadType } from '../../../../types/filter_data'
import { ViewModeForm } from '../../../features/viewModeForm/ui/ViewModeForm'
import { filterData } from '../lib/helpers'


type Props = {
    data: CatalogueState
    filters: FiltersPayloadType
    isListCatalogue: boolean
}

export const CatalogueList: FC<Props> = ({ data, filters, isListCatalogue }) => {


    const { items } = data
    let [filteredItems, setFilteredItems] = useState<CatalogueType[]>(() => { return items ? items : [] })

    useEffect(() => {
        setFilteredItems(filterData(items, filters))
    }, [items, filters])

    return (
        <>
            <h2 className={styles.items__title}>Найдено {filteredItems.length} результатов</h2>
            {data && <div className={isListCatalogue ? styles.ResultListListView : styles.ResultListTileView}>

                {isListCatalogue
                    ? <PaginatedItems itemsPerPage={3} items={filteredItems} style={'list'} Component={CatalogueCard} />
                    : <PaginatedItems itemsPerPage={6} items={filteredItems} style={'tile'} Component={CatalogueCard} />
                }


                <PaginatedItems itemsPerPage={isListCatalogue ? 3 : 6} items={filteredItems} style={isListCatalogue ? 'list': 'tile'} Component={CatalogueCard} />
               

            </div>}

        </>
    )
}