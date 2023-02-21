import React, { FC, useEffect,  useState } from "react";
import styles from './MainAdvertisingRent.module.scss'

import { DistrictType, MetroType } from '../../../../types/formTypes'
import { CatalogueState, CatalogueType } from "../../../../types/catalogue_data";

import { SimpleSlider } from "./Slider";

import Image from 'next/image'
import { filterItems, FiltersType } from "../lib/helpers";
import { MainAdvertisingFilter } from "../../../entities/MainAdvertisingFilter/ui/MainAdvertisingFilter";
import SvgDotes from "../../../shared/ui/icons/Dotes";
import SvgArrowRight from "../../../shared/ui/icons/ArrowRight";


export const MainAdvertisingRent: FC<{data: CatalogueState}> = ({ data }) => {

    const { items } = data

    const [filteredData, setFilteredData] = useState<CatalogueType[]>(()=>{return items ?? []})
    const [filters, setFilters] = useState<FiltersType> ({ metro: null, district: null, city: 'Minsk' })


    useEffect(() => {
        setFilteredData(filterItems(items, filters))
    }, [items, filters])



    // for form
    const onChange =
        (formData: { filter: 'metro', value: MetroType | '-1' } | { filter: 'district', value: DistrictType | '-1' }) => {

            if (formData.filter === 'metro') {
                setFilters(prev => {
                    return (
                        (formData.value === '-1')
                            ? { ...prev, metro: null }  // если из селекта пришло -1, то сбрасываем значение
                            : { ...prev, metro: formData.value }
                    )
                })
            }

            if (formData.filter === 'district') {
                setFilters(prev => {
                    return (
                        (formData.value === '-1')
                            ? { ...prev, district: null }  // если из селекта пришло -1, то сбрасываем значение
                            : { ...prev, district: formData.value }
                    )
                })
            }
        }

   

    return (
        <div className={styles.rent}>
            <div className={styles.rent__background}></div>
            <SvgDotes className={styles.rent__dotes} />

            <div className={styles.rent__heading}>
                <div className={styles.heading__titleWrapper}>
                    <h2 className={styles.heading__title}>Аренда квартир в Минске</h2>
                    <p className={styles.heading__subtitle}>КВАРТИРЫ НА СУТКИ</p>
                </div>

                
                <MainAdvertisingFilter onChange={onChange}/>
                
            </div>

            
            <SimpleSlider data={filteredData} />

      
            <div className={styles.rent__more}>
                <div>
                    <p className={styles.TotalCount}>{filteredData.length}<span> +</span></p>
                    <p className={styles.TotalCountDescription}>Предложений по Минску</p>
                </div>
                <button className={styles.ShowMoreButton}>
                    Посмотреть все  <SvgArrowRight stroke="white"/>
                </button>

            </div>


        </div>
    )
}