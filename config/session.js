const expressSession = require('express-session');
const mongoDbStore = require("connect-mongodb-session");
const { username, password } = require('../encode');

function createSessionStore() {
  const MongoDbStore = mongoDbStore(expressSession);

  const store = new MongoDbStore({
    uri: `mongodb+srv://${username}:${password}@$cluster0.vhewwbq.mongodb.net/`,
    databaseName: "audiophile-shop",
    collection: "sessions",
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000,
    },
  };
}

module.exports = createSessionConfig;
