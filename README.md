# Next.js PostGraphile Starter

A quick-start template for full-stack application development using React, Node.js, GraphQL and PostgreSQL utilizing the [Next.js](https://nextjs.org/) framework and [PostGraphile](https://www.graphile.org/).

## Prerequisites

- [Node.js 12.22.0](https://nodejs.org/) or later
- [PostgreSQL](https://www.postgresql.org/) database

## Getting Started

1. Run `yarn` to install dependencies
1. Create your `.env.local` file: `cp .env.local.template .env.local`
1. Run `yarn dev` to start the development server

## GraphQL Routes

- GraphQL - http://localhost:3000/api/graphql
- GraphiQL - http://localhost:3000/api/graphiql

## Tech Stack

This tech stack allows for rapid and maintainable application development because you will be writing less code using these tools!

- [Apollo Client](https://www.apollographql.com/docs/react/) - Fetch, cache, and modify application data from a GraphQL API
- [GraphQL Code Generator](https://www.graphql-code-generator.com/) - Generate typings and React hooks for your GraphQL API and queries
- [Next.js](https://nextjs.org/) - React framework for full-stack applications
- [PostGraphile](https://www.graphile.org/) - Automatic GraphQL API based on a PostgreSQL schema
- [PostgreSQL](https://www.postgresql.org/) - Database
- [TypeScript](https://www.typescriptlang.org/) - Strongly type your codebase

## Where to go from here?

This is a bare template that sets up the tooling needed for this tech stack. From here, you should start designing your [PostgreSQL schema](https://www.graphile.org/postgraphile/postgresql-schema-design/), which in turn, creates your GraphQL API. Then you can start builing the UI for your application.