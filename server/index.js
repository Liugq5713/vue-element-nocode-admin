const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const path = require("path");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

router.get("/api/pwd", ctx => {
  ctx.body = {
    data: {
      path: path.resolve("./")
    }
  };
});

router.post("/api/post", (ctx, next) => {
  console.log(ctx.request.body, next);
  fs.writeFileSync("./test.js", JSON.stringify(ctx.request.body));

  ctx.body = {
    status: true,
    data: {
      name: "jk",
      age: 25
    }
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
