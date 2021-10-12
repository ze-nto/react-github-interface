import React, { useEffect, useState } from 'react';
import RepositoryItem from './RepositoryItem';
import * as S from './Repositories.styles';
import useGithub from '../../hooks/githubHooks';

const Repositories = () => {

    const {gitHubState, getUserRepos, getUserStarred} = useGithub();
    const [ hasUserForSearchRepos, setHasUserForSearchRepos] = useState();

    useEffect(() => {
        if(gitHubState.user.login ){
            getUserRepos(gitHubState.user.login);
            getUserStarred(gitHubState.user.login);
        }
        setHasUserForSearchRepos(gitHubState.repositories)
      
    }, [gitHubState.user.login])

    return (
        <>
            {hasUserForSearchRepos? (
            <S.WrapperTabs 
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                    {gitHubState.repositories.map((item) => (
                    <RepositoryItem 
                        key={item.id}
                        name={item.name} 
                        linkToRepo={item.full_name}
                        fullName={item.full_name} />
                    ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
                <S.WrapperTabPanel>
                    <S.WrapperList>
                    {gitHubState.starred.map((item) => (
                        <RepositoryItem 
                            key={item.id}
                            name={item.name} 
                            linkToRepo={item.full_name}
                            fullName={item.full_name} />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>
                
            </S.WrapperTabs> 
            ) : ( 
            <> </>)}
       </>
    )
}

export default Repositories;
