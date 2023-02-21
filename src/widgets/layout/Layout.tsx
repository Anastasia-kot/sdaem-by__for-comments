import Header from './Header/ui/Header';
import Footer from './Footer/ui/Footer';
import React, { ReactNode, FC } from 'react';

type Props =  { children: ReactNode }

export const Layout: FC<Props> = ({ children }) => 
    <>
        <Header />
            {children}
        <Footer />
    </>
