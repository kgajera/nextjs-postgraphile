import { gql } from '@apollo/client';
import type { NextPage } from 'next';

import { useMyQueryQuery } from '../generated/graphql';

gql`
query MyQuery {
  nodeId
}
`;

const Home: NextPage = () => {
  const { data } = useMyQueryQuery();

  return (
    <div>
      <h1>Next.js PostGraphile Starter</h1>
      <ul>
        <li>GraphQL: <a href="http://localhost:3000/api/graphql">http://localhost:3000/api/graphql</a></li>
        <li>GraphiQL: <a href="http://localhost:3000/api/graphiql">http://localhost:3000/api/graphiql</a></li>
      </ul>
    </div>
  )
};

export default Home;
