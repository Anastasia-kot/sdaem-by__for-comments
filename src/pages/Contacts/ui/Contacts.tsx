import React, { FC, useState } from 'react'
import styles from './Contacts.module.scss'
import Image from 'next/image';

import { SendMessage } from '../../../features/sendMessage/ui/SendMessage';
import { CompanyInfo } from '../../../entities/CompanyInfo/ui/CompanyInfo';
import { Socials_list } from '../../../shared/ui/Socials_list/Socials_list';



export const Contacts: FC = () => 
    <main className={styles.contacts}>
            <CompanyInfo />
            <SendMessage/>
            <aside className={styles.contacts__socials}>
                <Socials_list socials={['inst', 'vk', 'fb']} />
            </aside>
    </main>
