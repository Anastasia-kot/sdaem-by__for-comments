import React, { FC } from 'react'
import styles from './CompanyInfo.module.scss'

import { contactsList } from './../model'
import SvgExclamatory from '../../../shared/ui/icons/Exclamatory'
import { Socials_list } from '../../../shared/ui/Socials_list/Socials_list'
import SvgNavIcon from '../../../shared/ui/icons/NavigationIcon'
import SvgMobile from '../../../shared/ui/icons/Mobile'
import SvgPostalEnvelope from '../../../shared/ui/icons/PostalEnvelope'
import SvgClock from '../../../shared/ui/icons/Clock'


export const CompanyInfo: FC = () =>{

    function makeContact(contactsList){
         
        return contactsList.map(({ type, image, text, additional_image }, index) =>
                <li key={index} className={styles.list__item}>
                    {image === 'navigation_icon' && <SvgNavIcon fill="white"/>}
                    {image === 'mobile' && <SvgMobile fill="white"/>}
                    {image === 'postal_envelope' && <SvgPostalEnvelope fill="white"/>}
                    {image === 'clock' && <SvgClock fill="white"/>}

                    {type
                        ? <span className={styles.item__text}>
                            <a href={`${type}:${text}`}> {text}</a>
                        </span>
                        : typeof text === 'string'
                            ? <span className={styles.item__text}> {text}  </span>
                            : text.map((item, index) => <span key={index} className={styles.item__text_array}>{item}</span>)
                    }

                    {additional_image && <Socials_list socials={additional_image} width={15} height={15} fill="white"/>}

                </li>)
        
    }

    return <address className={styles.info}>
        <h1 className={styles.info__title}>Контакты</h1>
        <p className={styles.info__description}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>

        <ul className={styles.info__list}>
            {makeContact(contactsList)}
        </ul>

        <p className={styles.EntrepreneurInfo}> ИП Шушкевич   Андрей Викторович </p>
        <p className={styles.EntrepreneurInfo}> УНП 192602485 Минским горисполкомом 10.02.2016 </p>
        <div className={styles.info__alert}>
            <SvgExclamatory width={35} height={35}/> 
            <p>Администрация сайта не владеет информацией о наличии свободных квартир</p>
        </div>
    </address>
}

