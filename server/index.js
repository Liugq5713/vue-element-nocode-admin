const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(bodyParser());
const router = new Router();
router.get("/api/test", ctx => {
  ctx.body = {
    status: true,
    data: {
      name: "jk",
      age: 25
    }
  };
});

router.post("/api/post", (ctx, next) => {
  console.log(ctx.request.body, next);

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
