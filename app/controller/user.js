/**
 * 用户模块
 */

const { Controller } = require('beidou-core');

class UserController extends Controller {
  async info() {
    const { ctx } = this;

    // const userId = ctx.params.id;

    await ctx.render('routes/user/info');
  }
}

module.exports = UserController;
