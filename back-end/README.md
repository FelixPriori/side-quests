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

1. Create a test database, e.g. `create database sidequests_tests;` using the psql client
2. Seed the test database from the root directory `\i back-end/db/test_setup` (note: this will drop your db tables if they already exist)
3. Run `npm run test`
