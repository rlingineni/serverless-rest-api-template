# Serverless API

Get a Typescript Node.js API in just a few minutes.

Use this template with the [serverless](https://www.serverless.com/framework/docs/providers/aws/cli-reference/create/) framework and get up and running with a basic API in just a few minutes.

You can swap our KoaJS for Express, or any other standard node.js library by tweaking the handler and wrapping it using that library.

### API Setup

Load Template
```
serverless create --template-url "https://github.com/rlingineni/serverless-api/tree/main" --path ./api
```

Use the API directory
```
cd api
```

Deploy API
```
serverless deploy
```

#### Test Locally
Starts a local server at `localhost:8000`
```bash
npm run start
```
