import React, { FC } from 'react';
import styles from './NewsCard.module.scss'
import Image from 'next/image'
import Link from 'next/link';
import { dateConverter } from '../../../shared/helpers/dateConverters';
import { NewsType } from '../../../../types/news_data';
import room from './../../../../public/images/room.png'
// './../../../../public/images/room.png'

export const NewsCard: FC<{ data: NewsType }> =  ( { data }) => {

   const { id, image, title, shortDescription, date } = data;

    return (

        <div className={styles.card}>
                <img src={image ? image : room} alt="article image" className={styles.card__image} width={406} height={227}/>
            
                <h3 className={styles.card__title}>{title}</h3>
                <p className={styles.card__description}>{shortDescription}</p>

                <div className={styles.card__footer}>
                    <span className={styles.footer__date}>{dateConverter(date)}</span>
                    <Link href={`/news/${id}`} className={styles.footer__button}> Читать </Link>
                </div>
               
        </div>
    )
} 