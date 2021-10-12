import React from 'react';
import Header from '../Header/Header';
import * as S from './Layout.styles';

const Layout = ({children}) => {

    return (
        <S.WrapperLayout>
            <Header />
           {children}
        </S.WrapperLayout>
    )
}

export default Layout;
