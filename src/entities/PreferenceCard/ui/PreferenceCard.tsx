import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import React, { FC } from 'react';
import styles from './PreferenceCard.module.scss'
import { textTransformer } from '../lib/helpers';
import SvgArrowRight from '../../../shared/ui/icons/ArrowRight';


type Props = {
    data: {
        logo: StaticImageData,
        header: string,
        description: {
            text: Array<string>
            bold: Array<string>
        },
        button: {
            text: string
            image: boolean
        },
        isGold: boolean,
    }

}

export const PreferenceCard: FC<Props> = ({ data }) => {

    const { logo, header, description, button, isGold } = data

    const text: string[][] = textTransformer(description)
    //  text as  [
    //         ['я', 'люблю', 'гулять'],      абзац
    //         ['маша', 'любит', 'маму']      абзац
    //     ]

    return (
        <div className={classNames(  styles.card, { [styles.isGold]: isGold }  )} >
            
            
            <div className={styles.card__header}>
                <div className={styles.header__logoWrapper}>
                    {logo && <Image src={logo} alt="logo" width={64} height={64} className={styles.header__logo} />}
                </div>
                <h1 className={ styles.header__title }> {header}</h1>
            </div>


            <ul className={styles.card__description}>
                {text.map((d, index) => <li key={index}>   {/*//абзац = <li>*/}
                    {d.map((dd, index) => <span            // слова с одинаковым стилем = <span> 
                        key={index}                        // каждый второй спан жирным шрифтом
                        style={{ fontWeight: index % 2 !== 0 ? 700 : 400 }}>{dd}</span>)} 
                </li>)}
            </ul>


            <button className={styles.card__button}>
                {button.text}
                {button.image &&   <SvgArrowRight stroke={isGold ? "white" : "black"}/>   }
            </button>

        </div>
    )
}

