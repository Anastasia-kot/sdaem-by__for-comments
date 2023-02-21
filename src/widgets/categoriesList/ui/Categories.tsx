import styles from './Categories.module.scss'
import React, { FC } from 'react'
import { CategoryCard } from '../../../entities/CategoryCard/ui/CategoryCard'
import { categories } from '../model'


export const Categories: FC = () => 
    <ul className={styles.categories__cards}>
        {categories.map( (item, index) =>
            <li key={index} className={styles.cards__item}> <CategoryCard {...item}/> </li>
        )}
    </ul>



