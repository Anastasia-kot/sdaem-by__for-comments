import styles from './Registration.module.scss'
import React, { FC, useState } from 'react'
import { AuthModal } from './../../../entities/AuthModal/AuthModal'
import { Form } from './../../../widgets/registerForm/ui/RegisterForm'
import Link from 'next/link'

//модалка сброса пароля
enum AuthModalEnum {
    register = 1,  //as true
    submit = 0  //as false
}

export const Registration: FC = () => {


    const [authModalState, setAuthModalState] = useState<AuthModalEnum>(AuthModalEnum.register)



    return (
        <main className={styles.registration}>
            {authModalState
                ? <div className={styles.register}>
                    <h2 className={styles.register__title}> Регистрация  </h2>
                    <div className={styles.register__form}>
                        <Form onSubmitFunction={() => setAuthModalState(AuthModalEnum.submit)} /></div>
                    <div className={styles.register__description}>
                        <h3 className={styles.description__title}>Пользователь обязуется:</h3>
                        <ul className={styles.description__list}>
                            <li className={styles.list__item}> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                            <li className={styles.list__item}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
                        </ul>

                        <p className={styles.description__auth}>
                            <span> Уже есть аккаунт ? </span>
                            <Link href='/auth'>Войдите</Link>
                        </p>

                    </div>
                </div>


                : <AuthModal title=' Подтвердите регистрацию' />
            }
        </main>
    )
}