import Image from 'next/image';
import React, { FC } from 'react';
import styles from './MapBlock.module.scss'
import dotes from './../../../public/images/svg/dotes.svg'
import SvgNavIcon from '../../shared/ui/icons/NavigationIcon';
import SvgDotes from '../../shared/ui/icons/Dotes';


 
type Props = {
    title: string
    description: string
    descriptionWidth: number
    isDotes: boolean
    buttonText: string
    children?: any  // svg in button
    minHeight: number


}

export const MapBlock: FC<Props> = ({ 
    title,
    description,
    descriptionWidth,
    isDotes,
    buttonText,
    children,
    minHeight
 }) => {
    return (
        <div 
        className={styles.map}
        style={{
            minHeight: minHeight,
            height: minHeight
        }}>
            {isDotes &&  <SvgDotes className={styles.map__dotes} />}

            <h2 className={styles.map__title}>{title}</h2>
            <p className={styles.map__description} style={{ maxWidth: `${descriptionWidth}px` }}>{description}</p>
            <button className={styles.map__button}>
                <SvgNavIcon/>
                {buttonText}
            </button>

        </div>
    )
}


