import { APIGatewayProxyHandler } from "aws-lambda";
const serverless = require("serverless-http");

const Koa = require("koa");
const Router = require("@koa/router");
const koaBody = require("koa-body");

import PetsRouter from './routes/pets';

const app = new Koa();
app.use(koaBody());

const router = new Router();
app.use(router.routes());

// import router from other files
app.use(PetsRouter.routes());
app.use(PetsRouter.allowedMethods());


// get the file as needed
router.get("/", (ctx, next) => {
  ctx.status = 200;
  ctx.body = {msg:"You're Serverless API is ready"};
  return;
});

export const main: APIGatewayProxyHandler = serverless(app, {
  binary: ["image/png"],
});

export { app };
