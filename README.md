# Ignews
This project is part of [Ignite React.js](https://lp.rocketseat.com.br/ignite#trilhas) training  of [Rocketseat](rocketseat.com.br) and it is a simple blog of articles for developers that uses several third-party APIs in its structure.

## Resources

This project uses many 3rd party APIs for its needs so it is necessary to create an account or configure some services, for that see the links below:

 1. [NextAuth.js](https://next-auth.js.org/) and [GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) for users sing-in;
 2. [Faunadb](https://fauna.com/) for storage users data and subscriptions;
 3. [Prismic CMS](https://prismic.io/) for storage articles;
 4. [Stripe ](https://stripe.com) to the users to pay your subscriptions;

# Setup
For execute Ignews on your enviroment is necessary only create a **.env.<environment\>** file with necessary enviroment variables as file below:

```JS
# Next Auth
NEXT_AUTH_SECRET=

# Stripe
STRIPE_API_KEY=
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=

# Github
GITHUB_OAUTH_CLIENT_ID=
GITHUB_OAUTH_CLIENT_SECRET=

# FaunaDB
FAUNADB_KEY=

# FaunaDB Migration
# The US Region Group, use db.us.fauna.com
# The EU Region Group, use db.eu.fauna.com
# The Classic Region Group, use db.fauna.com
FAUNADB_DOMAIN=db.us.fauna.com 
FAUNA_ADMIN_KEY=

# Prismic CMS
PRISMIC_ACCESS_TOKEN=

```
## Environment variables about links

 1. [NEXT_AUTH_SECRET](https://next-auth.js.org/configuration/options#secret)
 2. [STRIPE_API_KEY](https://stripe.com/docs/keys#obtain-api-keys)
 3. [STRIPE_WEBHOOK_SECRET](https://stripe.com/docs/webhooks/signatures)
 4. [GITHUB_OAUTH_CLIENT_ID](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
 5. [GITHUB_OAUTH_CLIENT_SECRET](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
 6. [FAUNADB_KEY](https://docs.fauna.com/fauna/current/api/fql/functions/createkey?lang=javascript)
 7. [FAUNA_ADMIN_KEY](https://docs.fauna.com/fauna/current/api/fql/functions/createkey?lang=javascript)
 8. [PRISMIC_ACCESS_TOKEN](https://prismic.io/docs/technologies/access-token)

## Migrate collections and indexs on faunadb
After **create env file** and run **yarn install** run **yarn dev:faunadb:apply** for create collections and index on faunadb from the migrations located on ./fauna/migrations (for more details about it see [@fauna-labs/fauna-schema-migrate](https://www.npmjs.com/package/@fauna-labs/fauna-schema-migrate));

# Run application
For run the ignews  just run **yarn dev**
