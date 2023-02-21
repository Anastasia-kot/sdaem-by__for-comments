import React, { FC, useState } from 'react'
import styles from './Auth.module.scss'
import { AuthModal } from '../../../entities/AuthModal/AuthModal'
import { AuthForm } from '../../../widgets/authForm/ui/AuthForm'





//модалка сброса пароля
export enum AuthModalEnum {
    auth = 1,  //as true
    submit = 0  //as false
}

export const Auth: FC = () => {
 
    const [authModalState, setAuthModalState] = useState<AuthModalEnum>(AuthModalEnum.auth) 
    
    return (
        <main className={styles.auth}>
            {authModalState
                ? <AuthForm setAuthModalState={setAuthModalState}  />
                : <AuthModal title='Подтвердите свой аккаунт'/>
            }
             
        </main>
    )
}