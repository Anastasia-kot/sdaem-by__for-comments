import React, { useEffect, useState, FC } from 'react'
import styles from './News.module.scss'
import { useRouter } from 'next/router'
import { routingFunc, sortingFunc } from '../lib/helpers'
import { Form } from '../../../widgets/searchWordForm/ui/Form'

import { Breadcrumbs } from '../../../entities/Breadcrumbs/Breadcrumbs'
import { NewsCard } from '../../../entities/PostCard/ui/NewsCard'
import { sortingNewsPerDate } from '../../../shared/helpers/sortingFunctions'
import { NewsState, NewsType } from '../../../../types/news_data'
import { PaginatedItems } from '../../../shared/ui/Pagination/Pagination'

export const News: FC<{ data: NewsState }> = ({ data }) => {

    //data for ui
    const { items } = data
    const [filteredNews, setFilteredNews] = useState<NewsType[]>(sortingNewsPerDate(items))
 
    // refresh ui
    const router = useRouter();
    const {query} = router;

    useEffect(() => {
        if (query && query.search && typeof(query.search) === 'string') {
                setFilteredNews(sortingFunc(query.search, items))
            }
    }, [query, query.search, items]) 


    //push search string from form to URL
    const onSubmit = (values) => routingFunc(values, router) 
    const onChange = (string: string) => routingFunc(string, router)  



    return (
        <main className={styles.news}>
            <div className={styles.news__background}></div>

            <Breadcrumbs breadcrumbs={[{ name: '', value: 'Новости' }]} />
            <div className={styles.news__header}>
                <h1 className={styles.header__title}>Новости</h1>
                <Form onChange={onChange} onSubmit={onSubmit}/>
            </div>

            <div className={styles.news__cards}>  
                <PaginatedItems itemsPerPage={9} items={filteredNews} Component={NewsCard}/>
            </div>
        </main>
    )
} 