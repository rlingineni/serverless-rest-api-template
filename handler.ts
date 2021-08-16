import { APIGatewayProxyHandler } from "aws-lambda";
const serverless = require("serverless-http");

const Koa = require("koa");
const Router = require("@koa/router");
const koaBody = require("koa-body");

const app = new Koa();
app.use(koaBody());

// import routes from other files as necessary
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.status = 200;
  ctx.body = {msg:"You're Serverless API is ready"};
  return;
});



export const main: APIGatewayProxyHandler = serverless(app, {
  binary: ["image/png"],
});

export { app };
