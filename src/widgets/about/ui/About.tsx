import Image from 'next/image'
import styles from './About.module.scss'
import React, { FC } from 'react'
import room from '../../../../public/images/room-about.png'
import SvgDotes from '../../../shared/ui/icons/Dotes'


export const About: FC = () => 
    <div className={styles.about}>
        <h3 className={styles.about__subtitle}>ЧТО ТАКОЕ SDAEM.BY</h3>
        <h2 className={styles.about__title}>Квартира на сутки в Минске</h2>

        <Image src={room} alt="room" className={styles.about__image} />
        <SvgDotes className={styles.about__dotes}/>
 
        <div className={styles.about__description}>
            <h4> Нужна квартира на сутки в Минске? </h4>
            <p> На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог насчитывает более 500 квартир. Благодаря удобной навигации вы быстро найдете подходящий вариант.</p>
            <p> В каталоге представлены комфортабельные однокомнатные квартиры на сутки и квартиры с большим количеством комнат в разных районах города, с различной степенью удобства от дешевых до VIP с джакузи.</p>
            <p> Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с выбором и связаться с владельцем для уточнения условий аренды и заключить договор. Заметим, на сайте представлены исключительно квартиры на сутки без посредников, что избавляет посетителей от необходимости взаимодействовать с агентствами, тратя свое время и деньги. Также пользователи сайта могут совершенно бесплатно размещать объявления о готовности сдать квартиру на сутки.</p>
        </div>

    </div>

