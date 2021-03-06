'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/common/log',controller.home.log)
  router.post('/user/sendCode',controller.user.sendCode)
};
