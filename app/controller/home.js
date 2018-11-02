/**
 * 首页
 */

const { Controller } = require('beidou-core');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log('在首页');

    await ctx.render('index');
  }
}

module.exports = HomeController;
