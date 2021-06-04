import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  RepoIcon,
  OverviewIcon,
  ProjectsIcon,
  PackagesIcon,
  Tab,
  ItemNavTab,
  SearchForm,
  ReposHeader
} from './styles';

import ProfileData from '../../components/ProfileData';
import ListRepoCard from '../../components/ListRepoCard';
import SelectInput from '../../components/SelectInput';

import { APIUser, APIRepo } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const ListRepo: React.FC = () => {
  const { username = 'gusnogueira' } = useParams();
  const [data, setData] = useState<Data>();
  const [search, setSearch] = useState('');
  const types = [{value: 1, label: 'Type'}];
  const languages = [{value: 1, label: 'Languages'}];
  const sort = [{value: 1, label: 'Sort'}];

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const slicedRepos = shuffledRepos.slice(0, 6); // 6 repos

      setData({
        user,
        repos: slicedRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <>
      <ItemNavTab>
        <Link to={`/`} className="menu-item-link">
          <div className="menu-item">
            <OverviewIcon/>
            <span >Overview</span>
          </div>
        </Link>
      </ItemNavTab>
      <ItemNavTab>
        <Link to={`/repositories`} className="menu-item-link-active">
          <div className="menu-item-active">
            <RepoIcon/>
            <span >Repositories</span>
            <span className="number">{data.user?.public_repos}</span>
          </div>
        </Link>
      </ItemNavTab>
      <ItemNavTab>
        <Link to={``} className="menu-item-link">
          <div className="menu-item">
            <ProjectsIcon/>
            <span >Projects</span>
          </div>
        </Link>
      </ItemNavTab>
      <ItemNavTab>
        <Link to={``} className="menu-item-link">
          <div className="menu-item">
            <PackagesIcon/>
            <span >Packages</span>
          </div>
        </Link>
      </ItemNavTab>
    </>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <ReposHeader>
            <SearchForm onSubmit={() => {}}>
              <input
                placeholder="Find a repository..."
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
              />
            </SearchForm>
            <SelectInput options={types}/>
            <SelectInput options={languages}/>
            <SelectInput options={sort}/>
            </ReposHeader>
            <div>
              {data.repos.map((item) => (
                <ListRepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
                  updated={item.updated_at!}//Date.parse(item.updated_at!)
                />
              ))}
            </div>

          </Repos>

        </RightSide>
      </Main>
    </Container>
  );
};

export default ListRepo;
