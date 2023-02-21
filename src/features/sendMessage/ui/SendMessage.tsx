import React, { FC, useState } from 'react'
import styles from './SendMessage.module.scss'
import { useForm } from "react-hook-form";

import { ContactFormType } from '../../../../types/authTypes';

import { SimpleButton } from '../../../shared/ui/buttons/Simple/Simple';
import { InputBlock } from '../../../shared/ui/Input/Input'

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { UserDataInterface } from '../../../store/authSlice';
import { sendButtonProps, defaultInputProps, emailInputProps, nameInputProps, textareaInputProps, closeButtonProps } from '../model';



export const SendMessage: FC = () => {

    // автозаполнение формы
    const userData: UserDataInterface = useSelector((state: RootState) => state.auth.data)
    const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth)


    //for form
    const { handleSubmit, register, formState: { errors } } = useForm<ContactFormType>();
    const onSubmit = values => setIsModal(true) // отправить письмо на бекенд

    //письмо отправлено
    const [isModal, setIsModal] = useState(false);
 

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputBlock  register={register}  {...defaultInputProps}
                {...nameInputProps} 
                defaultValue={isAuth && userData?.login ? userData.login : null} />

            <InputBlock register={register}  {...defaultInputProps} 
                {...emailInputProps}/>

            <InputBlock register={register} {...defaultInputProps} 
                {...textareaInputProps}/>

            <div className={styles.SubmitButtonWrapper}>
                <SimpleButton {...sendButtonProps} />
            </div>


            { isModal && 
                <div className={styles.form__modal_background}>
                    <div className={styles.form__modal}>
                        <h2 className={styles.modal__title}> Ваше письмо отправлено! </h2>
                        <p className={styles.modal__subtitle}> Какое-то сообщение о том, что письмо отправлено, какое-то сообщение, что письмо отправлено.</p>
                        <SimpleButton {...closeButtonProps} onClick={() => setIsModal(false)} />
                    </div>
                </div>}                
                
        </form>
    )
}