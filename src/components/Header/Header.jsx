import React, { useState } from 'react';
import useGithub from './../../hooks/githubHooks'
import * as S from './Header.styles'

const Header = () => {

    const { getUser } = useGithub();
    const [ search, setSearch] = useState(undefined);

    const submitGetUser = () => {
        if(!search) return;
        return getUser(search);
    }

    return (
        <header>
            <S.Wrapper>
                <input 
                    type="text" 
                    placeholder="Digite um nome de usuário" 
                    onChange={(event) => setSearch(event.target.value) }/>
                <button type="submit" onClick={submitGetUser}>Buscar</button>
            </S.Wrapper>
        </header>
    )
}

export default Header;
