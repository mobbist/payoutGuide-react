//路由层, 负责url处理
const Router = require("koa-router");

const user = new Router();
const getFullSchema = require("../controllers/getFullSchema");


user.post("/", getFullSchema.getFullSchema);
module.exports = user;