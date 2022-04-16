import { postgraphile } from "postgraphile";

import { pg } from './pg';

export const requestHandler = postgraphile(
  pg,
  process.env.DATABASE_SCHEMA,
  {
    enhanceGraphiql: true,
    graphiql: true,
    graphiqlRoute: '/api/graphiql',
    graphqlRoute: '/api/graphql',
    jwtSecret: process.env.JWT_SECRET,
  }
);
