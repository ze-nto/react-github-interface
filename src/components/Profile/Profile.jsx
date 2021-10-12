import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './Profile.styles';

const Profile = () => {

    const { gitHubState } = useGithub();


    return (
        <S.Wrapper>
            <S.WrapperImage
                src={gitHubState.user.avatar} 
                alt="Avatar do usuario" />
            
            <S.WrapperInfoUser>
                <div>
                    <h1>{gitHubState.user.name}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username: </h3>
                        <span>
                            <a 
                              href={gitHubState.user.htmlUrl} 
                              target="_blank"
                              rel="noreferrer">
                                  {gitHubState.user.login}
                            </a>
                        </span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company:</h3>
                        <span> {gitHubState.user.company} </span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location:</h3>
                        <span> {gitHubState.user.location} </span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <span>
                            <a 
                              href={gitHubState.user.blog} 
                              target="_blank"
                              rel="noreferrer">
                                  {gitHubState.user.blog}
                            </a>
                        </span>
                    </S.WrapperUserGeneric>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{gitHubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>{gitHubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{gitHubState.user.publicGists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{gitHubState.user.publicRepos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>
        </S.Wrapper>
    )
}

export default Profile
