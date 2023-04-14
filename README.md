# Near search

Repo for Near Location frontend challenge.

You can access a live version [Here][here]

## :rocket: Technologies

This project was developed with the following technologies:

- [Next][nextjs]
- [TypeScript][typescript]
- [NodeJs][nodejs]
- [CircleCI][circleci]
- [Storybook][storybook]

## :information_source: How to run

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Npm][npm] installed on your computer.

From your command line:

### Installation

```bash
# Clone this repository
$ git clone https://github.com/sealove20/near-serch.git

# Go into the repository
$ cd near-serch

# Install dependencies
$ npm install

# Copy environment variables from example file
$ cp .env.example .env

# running server
$ npm run dev
```

### Test

You can run unit tests using:

```bash
$ npm run test
```

You can run e2e tests using:
```bash
$ npm run e2e
```

### CI/CD

The application is deployed on Vercel where a continuous deployment (CD) process is configured to automatically deploy the chosen branch. Before each pull request (PR) is merged into the main branch, a continuous integration (CI) pipeline in CircleCI runs all the tests. If all tests pass, the PR is merged and triggers the deploy pipeline.

By following this process, you ensure that any code changes that make it into the main branch are thoroughly tested and of high quality, and that any deployment to the production environment is done in a controlled and automated way. This helps to reduce the risk of introducing bugs or errors into the live application, and makes it easier to maintain the codebase over time.

[typescript]: https://www.typescriptlang.org/
[nextjs]: https://nextjs.org/
[npm]: https://www.npmjs.com/
[nodejs]: https://nodejs.org/
[graphql]: https://graphql.org/
[relay]: https://relay.dev/
[circleci]: https://circleci.com/
[storybook]: https://storybook.js.org/
[vercel]: https://vercel.com/
[here]: https://near-serch.vercel.app

