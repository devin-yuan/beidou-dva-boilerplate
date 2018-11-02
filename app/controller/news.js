/**
 * 新闻模块
 */

const { Controller } = require('beidou-core');

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    const news = await ctx.service.news.list();
    // const userId = ctx.params.id;

    await ctx.render('routes/news/list', {
      data: news,
    });
  }
}

module.exports = NewsController;
