import React from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line } from "recharts";

import {
  Content,
  Container,
  Topside,
  Botside,
  StarIcon,
  ForkIcon,
  ChartContainer,
  ChartInfoText,
  Chart
} from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
  updated: any;
}

const ListRepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
  updated,
}) => {
  const languageClass = language ? language.toLowerCase() : 'other';
  const data = [
  {
    name: "Page A",
    data: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    data: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    data: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    data: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    data: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    data: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    data: 4300,
    amt: 2100
  }
];
  var data3 = (updated.substr(0, 10));

  return (
    <Content>
      <Container>
        <Topside>
          <header>
            <Link to={`/${username}/${reponame}`}>{reponame}</Link>
          </header>

          <p>{description}</p>
        </Topside>

        <Botside>
          <ul>
            <li>
              <div className={`language ${languageClass}`} />
              <span>{language}</span>
            </li>
            <li>
              <StarIcon />
              <span>{stars}</span>
            </li>
            <li>
              <ForkIcon />
              <span>{forks}</span>
            </li>
            <li>
              <span>Updated on { data3 }</span>
            </li>
          </ul>
        </Botside>
        </Container>
      <Chart>
        <ChartContainer>
          <LineChart
          width={200}
          height={40}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          >
          <Line dataKey="data" stroke="#68AB7B" dot={false}/>
          </LineChart>
          <div className="ChartComplement"/>
          <div className="ChartInfo">
            <ChartInfoText>Past year of activity</ChartInfoText>
          </div>
        </ChartContainer>
      </Chart>
    </Content>
  );
};

export default ListRepoCard;
