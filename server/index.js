const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();

app.use(views(path.join(__dirname, './views'), {
  extension: 'pug'
}));

app.use(async ctx => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'macon'
  })
})

app.listen(3000);