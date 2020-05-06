# Backend

## Tests

In order to run the backend tests, you'll need a `.env.test` config file (not to be committed in git) inside the `back-end/` folder, e.g.:

```
DB_HOST=localhost
DB_USER=quester
DB_NAME=sidequests_tests
DB_PASS=
DB_PORT=
```

And then:

1. Create a test database which you can create using the psql client with `create database sidequests_tests;`
2. If you've never run the tests for this project, seed the test database using `db/test_setup.sql`
3. Run `npm run test`
