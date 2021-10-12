import React from 'react';
import Layout from './components/Layout/Layout';
import NoSearch from './components/NoSearch/NoSearch';
import Profile from './components/Profile/Profile';
import Repositories from './components/Repositories/Repositories';
import useGithub from './hooks/githubHooks';


const App = () => {

  const { gitHubState } = useGithub();
  return (
        <Layout>
          {gitHubState.hasUser? 
          <>
            {gitHubState.loading? (
              <p> Loading...</p>
            ): (
              <>
              <Profile />
              <Repositories/>
              </>
            )}
          </> : <NoSearch />}
        </Layout>
  );
}

export default App;
