const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");
const path = require("path");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

let pwd = path.resolve("./");

router.get("/api/pwd", ctx => {
  ctx.body = {
    data: {
      pwd
    }
  };
});

router.get("/api/dirs", ctx => {
  console.log("TCL: ctx.query.pwd", ctx.query.pwd);
  const files = fs.readdirSync(ctx.query.pwd).filter(file => {
    return fs.statSync(`${ctx.query.pwd}/${file}`).isDirectory() && !file.includes(".") && file !== "node_modules";
  });
  ctx.body = {
    data: {
      files: files
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
