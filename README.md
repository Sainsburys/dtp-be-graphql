# Sainsbury's TypeScript/GrahphQL test

## Expectations

You should create a GraphQL API which allows users to get information about films and TV programs.

You should aim to support:

- Looking up a film by its ID
- Listing upcoming films
- Searching for films

You could also add support, if you have time, for:

- Looking up TV programs by ID
- Searching for TV programs as well as films
- Any other feature you think would be useful

Users of the API expect the following information to be available:

- Title
- Year of release
- Director's name
- Length
- ID

You can use [TMDb REST API](https://www.themoviedb.org/documentation/api) as a source of data. There are various methods
available for specific film/TV series, lists, searching, etc. The API key `c857fa67fba523ad3ce66df18e7ab279` can be used
to authenticate with the API.

### Running the server

You can start the server with `yarn start`. It should watch for changes and reStart when files are changed.

## Testing

Mocha, Chai and Sinon are installed. Feel free to use any other test runner or testing tools if you prefer.

You can run `yarn test` to start the test runner in watch mode.

### Notes

We use Yarn for dependency management. You can refer to [this handy cheatsheet](https://devhints.io/yarn) if you're more
familiar with NPM.

ESLint and Prettier are installed for linting and formatting. You can lint with `yarn lint` and fix any auto-fixable
issues with `yarn lint --fix`. The config is fairly permissive, so don't stress about this.

You can use any library, framework, etc that you like. There's no right or wrong way to complete the task.

The most important piece of advice is to talk about what you're doing, why you're doing it, any caveats/trade-offs
you're making, etc. Please ask questions if anything is unclear: this is a collaborative task, not a passive
observation!