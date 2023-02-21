import React, { FC, useState } from "react";
import styles from './Header.module.scss';

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import classNames from "classnames";

import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../../store/store'
import { setAuthUserData, setToggleLogIn, UserDataInterface } from "../../../../store/authSlice";

import { cityNameConverters, cityNameEngToRus } from "../../../../shared/helpers/nameConverters";
import { categoriesItems, navItems } from "../../../../../types/main_data";
import { CategoryType, citiesList, CityType } from "../../../../../types/formTypes";
import { filtersToUrlString } from "../../../../shared/helpers/urlHelpers";

import SvgNavIcon from "../../../../shared/ui/icons/NavigationIcon";
import SvgArrowDown from "../../../../shared/ui/icons/ArrowDown";

const logo = require('../../../../../public/images/logo.png');
const avatar = require('../../../../../public/images/avatar.png');

 



const Header: FC = () => {

    const userData: UserDataInterface = useSelector((state: RootState) => state.auth.data)
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth)

    const router = useRouter();
    const dispatch = useDispatch();


    const onClick = (props: { category?: CategoryType, city?: CityType }) => {
        let searchString: string = filtersToUrlString(props)
        router.push(`/catalogue${searchString}`)
    }







    // modals 
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const [isRoomsActive, setIsRoomsActive] = useState(false);
    const [isUnloginMenuActive, setIsUnloginMenuActive] = useState(false);

    const onBurgerClick = () => {
        setIsBurgerActive(prev => !prev);
    }
    const onRoomsClick = () => {
        setIsRoomsActive(prev => !prev);
    }
    const onUnloginMenuClick = () => {
        setIsUnloginMenuActive(prev => !prev);
    }
    const onUnloginButtonClick = () => {

        dispatch(setToggleLogIn(false))
        dispatch(setAuthUserData({
            email: null,
            login: null,
            avatar: null
        }))
    }





    return (
        <header className={styles.header}>

            <nav className={styles.header__navigation}>
                <ul className={classNames(    styles.navigation__list,  { [styles.active]: isBurgerActive }   )} >
                    <li className={classNames(   styles.list__burger,   { [styles.active]: isBurgerActive }   )} onClick={onBurgerClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </li>
                    {navItems.map(({ id, name, value }) =>
                        <li key={id}>
                            <Link href={name === 'index' ? '/' : `/${name}`}>
                                {name === 'map' && <SvgNavIcon fill="#8291A3" />}
                                {value}
                            </Link>
                        </li>)}

                    <li> 
                        <Link href='/liked'>
                            Закладки
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="#8291A3">
                                <path d="m10 17.75-1.375-1.271Q6.354 14.417 4.927 13 3.5 11.583 2.698 10.521q-.802-1.063-1.083-1.948-.282-.885-.282-1.844 0-2.083 1.459-3.531Q4.25 1.75 6.354 1.75q.938 0 1.917.385.979.386 1.729 1.073.75-.687 1.729-1.073.979-.385 1.917-.385 2.104 0 3.562 1.448 1.459 1.448 1.459 3.531 0 .959-.271 1.823-.271.865-1.073 1.917-.802 1.052-2.24 2.489-1.437 1.438-3.75 3.563Zm0-2.771q1.979-1.791 3.25-3.031 1.271-1.24 2.031-2.167.761-.927 1.052-1.635.292-.708.292-1.417 0-1.25-.844-2.094-.843-.843-2.135-.843-.688 0-1.344.312-.656.313-.906.667l-.729.854H9.333l-.729-.854q-.25-.354-.927-.667Q7 3.792 6.354 3.792q-1.292 0-2.135.843-.844.844-.844 2.094 0 .709.271 1.386.271.677 1.01 1.593.74.917 2.021 2.167 1.281 1.25 3.323 3.104Zm0-5.604Z" />
                            </svg>
                        </Link>
                    </li>

                    <li className={isUnloginMenuActive ? styles.active : ''}>
                        {isAuth
                            ? <>
                                <Image src={userData?.avatar ? userData.avatar  : avatar} alt='avatar' width={30} height={30} className={styles.Avatar} />
                                <span className={styles.UserName}> {userData.login}</span>
                                <button
                                    type='button'
                                    className={styles.UnloginButton}
                                    onClick={onUnloginMenuClick}>
                                    <SvgArrowDown/>
                                </button>

                                <ul className={styles.UnloginMenuList} >
                                    <li className={styles.UnloginMenuListItem} onClick={onUnloginButtonClick}>Выйти</li>
                                </ul>

                            </>
                            : <Link href='/auth'> Вход и регистрация </Link>
                        }
                    </li>
                </ul>
            </nav>



































            <div className={styles.header__categories}>
                <ul className={styles.categories__list}>
                    <li>
                        <Link href='/'>
                            <Image src={logo} alt="SDAEM.BY" />
                        </Link>
                    </li>
                    {categoriesItems.map(({ id, name, value }) =>
                        <li key={id}
                            onClick={name === 'room' ? onRoomsClick : ()=> onClick({ category: name })}
                            className={isRoomsActive ? styles.active :'' }
                        >
                            {value}

                            {name === 'room' &&
                                <>
                                <SvgNavIcon/>
                                    <ul className={styles.RoomsList}>
                                        {citiesList.map((c, index) =>
                                            <li key={index}
                                                className={styles.RoomsListItem}
                                                onClick={() => onClick({category: 'room', city: c })}  >
                                                    Квартиры на сутки в  {cityNameConverters(cityNameEngToRus(c))}
                                            </li>)
                                        }  
                                    </ul>
                                </>
                            }

                        </li>)}

                    <li><button>+ Разместить объявление</button></li>
                </ul>

            </div>
        </header >
    )
} 

export default Header;