import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router';
import React, { FC } from 'react'; 
import styles from './CategoryCard.module.scss'

import { cityNameEngToRus } from '../../../shared/helpers/nameConverters';
import { CategoryType } from '../../../../types/formTypes';
import { CityType } from '../../../../types/formTypes';

import { onClick } from '../lib/helpers';

type Props = {
        filter: { category: CategoryType }
        header: string,
        additional_header: string,
        hashtags?: Array<CityType>,
        background: StaticImageData
        arrow_button: boolean
}

export const CategoryCard: FC<Props> = ({ filter, header, additional_header, hashtags, background, arrow_button }) => {
     const router = useRouter();
   
    return (
        <div className={styles.card}>
            <Image src={background} alt="background" className={styles.card__image}/>
            <div className={styles.card__content}>
                <p onClick={() => onClick(filter, router)} className={styles.content__subheader}> {additional_header}</p>
                <h1 onClick={() => onClick(filter, router)} className={styles.content__header}> {header}</h1>
                <ul className={styles.content__hashtaglist}>
                    {hashtags && hashtags.length > 0 && 
                        hashtags.map((h, index) => 
                            <li key={index}
                                className={styles.hashtaglist__item} 
                                onClick={() => onClick({ ...filter, city: h }, router)}>
                                    {cityNameEngToRus(h)}
                            </li>)}
                </ul>

                {arrow_button && <button className={styles.button_style_arrow} onClick={() => onClick(filter, router)} /> }


            </div>
        </div>
    )
}

