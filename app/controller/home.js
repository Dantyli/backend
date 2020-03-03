'use strict';

const Controller = require('../core/baseController');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async log(){
    const {ctx}=this;
    console.log(ctx.request.ip,ctx.request.header['user-agent'])
    this.ok()
  }
}

module.exports = HomeController;
