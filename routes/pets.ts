
import * as Router from "koa-router";
const PetsRouter = new Router({ prefix: "/pets" });


PetsRouter.get("/", async (ctx,next)=> {
  ctx.body = { msg: "You don't have any pets!" };
})

export default PetsRouter;
