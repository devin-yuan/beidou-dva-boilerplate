/**
 * 用户模块
 */

const { Service } = require('beidou-core');

class NewsService extends Service {
  async list() {
    const { app } = this;
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=209cd02e74314a32a4e5f1d5b9cbdff1';

    const result = await app.curl(url, {
      method: 'GET',
      dataType: 'json',
    });

    return result.data.articles;
  }
}

module.exports = NewsService;
