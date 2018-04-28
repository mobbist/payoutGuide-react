//所有路由汇总index.js
const router = require("koa-router")();
const home = require("./home");
const fullSchema = require("./fullSchema");
router.use('/', home.routes(), home.allowedMethods())
router.use('/getfullSchema', fullSchema.routes(), fullSchema.allowedMethods())
module.exports = router;