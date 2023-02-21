import React, { FC } from 'react'
import styles from './404.module.scss'
import Link from 'next/link'

import SvgHouse from './../../../shared/ui/icons/House'
import SvgDotes from '../../../shared/ui/icons/Dotes'
import Svg404Image from '../../../shared/ui/icons/404Image'

export const Page404: FC = () => {
    return (
        <main className={styles.error}>
            <SvgDotes className={styles.error__dotes}  />
            <SvgDotes className={styles.error__dotes}  />
            <Svg404Image className={styles.error__error_image}  />
         
            <h1 className={styles.error__title}>Ошибка 404</h1>
            <p className={styles.error__subtitle}>Возможно, у вас опечатка в адресе страницы, или её просто не существует</p>
            <Link href='/'>
                <button type="button" className={styles.error__button}>
                    <SvgHouse fill="black" />
                    Вернуться на главную
                </button>
            </Link>

        </main>
    )
}
