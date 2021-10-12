import React from 'react';
import * as S from './RepositoryItem.styles';

const RepositoryItem = ({name, linkToRepo, fullName}) => {
    return (
        <S.Wrapper>
            <h2>{ name }</h2>
            <h4>{ fullName }</h4>
            <a href={linkToRepo} target='_blank' rel="noopener noreferrer">{fullName}</a> 
        </S.Wrapper>
    )
}

export default RepositoryItem;
