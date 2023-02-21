import React, { FC } from 'react'
import { Socials_list } from '../Socials_list/Socials_list'
import styles from './Socials_sharing.module.scss'


type SocialsType = 'vk' | 'fb' | 'viber' | 'tg' | 'wa' | 'mail' | 'inst'

type Props = {
    socials: SocialsType[]
} & any // React.HTMLAttributes<HTMLAllCollection>

 
export const Socials_sharing: FC<Props> = ({ socials, ...props }) =>         
    <div className={ styles.sharing }>
        <span className={styles.sharing__text}>Поделиться</span>
        <Socials_list socials={socials} {...props}/>
    </div>
       
    