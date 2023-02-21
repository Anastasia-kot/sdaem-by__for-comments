import Link from 'next/link';
import styles from './AuthForm.module.scss'
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { AuthFormType } from './../../../../types/authTypes';
import { InputBlock } from '../../../shared/ui/Input/Input';
import { setAuthUserData, setToggleLogIn } from './../../../store/authSlice';

import React, { FC } from 'react';
import { inputProps, loginProps, passwordProps } from '../model';
import { AuthModalEnum } from '../../../pages/Auth/ui/Auth'
import SvgAvatar from '../../../shared/ui/icons/Avatar';
import SvgLock from '../../../shared/ui/icons/Lock';

 

export const AuthForm: FC<{ setAuthModalState }> = ({ setAuthModalState }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<AuthFormType>();
    const onSubmit = values => {
        // console.log(values);
        // проверка логина и пароля на сервере
        dispatch(setToggleLogIn(true))
        dispatch(setAuthUserData({ ...values }))
        setTimeout(() => {
            router.back()
        }, 3000
        )
    }





    return (

        <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}>

            <h2 className={styles.form__title} > Авторизация  </h2>
            <p className={styles.form__description}> Авторизируйтесь, чтобы начать   публиковать свои объявления </p>



            <div className={styles.form__login}>
                <InputBlock {...inputProps} register={register} {...loginProps} /> <SvgAvatar/>
            </div>

            <div className={styles.form__password}>
                <InputBlock {...inputProps} register={register} {...passwordProps} /> <SvgLock/>
            </div>

            <div className={styles.form__rememberMe}>

                <label className={styles.rememberMe__label}>
                    <div className={styles.switch}>
                        <input type="checkbox"  {...register("rememberMe")} />
                        <span className={styles.slider}> </span>
                    </div>
                    <p> Запомнить меня </p>
                </label>

                <button className={styles.violet}
                    onClick={() => setAuthModalState(AuthModalEnum.submit)}>Забыли пароль?
                </button>
            </div>

            <button className={styles.form__submit}> Войти </button>
            <p className={styles.form__register}>
                <span> Еще нет аккаунта? </span>
                <Link href='/registration'>Создайте акканут</Link>
            </p>

        </form>

    )
}