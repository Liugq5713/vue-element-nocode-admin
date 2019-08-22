const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const fs = require("fs");

const app = new Koa();
app.use(bodyParser());
const router = new Router();

let pwd = process.execPath;
console.log("test", pwd);
router.get("/api/pwd", ctx => {
  ctx.body = {
    data: {
      pwd
    }
  };
});

router.get("/api/dirs", ctx => {
  console.log("TCL: ctx.query.pwd", ctx.query.pwd);
  pwd = ctx.query.pwd;
  const files = fs.readdirSync(ctx.query.pwd).filter(file => {
    return fs.statSync(`${ctx.query.pwd}/${file}`).isDirectory() && !file.includes(".") && file !== "node_modules";
  });
  ctx.body = {
    data: {
      files: files
    }
  };
});

router.post("/api/genlocalfile", ctx => {
  fs.writeFileSync(`${pwd}/test.vue`, ctx.request.body.code);
  ctx.body = {
    status: "success"
  };
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
