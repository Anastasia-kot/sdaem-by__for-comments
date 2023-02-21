import Image from 'next/image'
import styles from './NewsAsideList.module.scss'
import React, { FC } from 'react'
import Link from 'next/link';

import { dateConverter } from '../../../shared/helpers/dateConverters';
import { sortingNewsPerDate } from '../../../shared/helpers/sortingFunctions';
import { NewsState } from '../../../../types/news_data';
import SvgArrowRight from '../../../shared/ui/icons/ArrowRight';



export const NewsAsideList: FC<{ data: NewsState }> = ({data}) => {

    const { items } = data

    //надо отсортировать и найти 4 более новые (или взять последние 4 из массива)
    const sortedNews = sortingNewsPerDate(items).slice(0, 4)

    return (
        <aside className={styles.aside__news}>

                <h3 className={styles.news__title}> Новости </h3>
                
                <ul className={styles.news__list}>
                    {sortedNews.map(({ id, title, date }, index) => 
                        <li key={index}>
                            <Link href={`/new/${id}`} >
                                <span>{title}</span>
                                <span>{dateConverter(date)}</span>
                            </Link>
                        </li>
                    )}

                    <li key={sortedNews.length} >
                        <Link href='/news'>
                            Посмотреть все 
                        <SvgArrowRight stroke="#664EF9"/>
                        </Link>
                    </li>
                </ul>


            </aside>
    )
}