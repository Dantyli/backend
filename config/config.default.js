'use strict';

module.exports = appInfo => {
  
  const config = exports = {};
  //框架层异常处理
  config.onerror={
    all(err,ctx){
      ctx.body='系统内部错误'
      ctx.status=500
    }
  }
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_dantyli';

  // add your middleware config here
  config.middleware = ['log'];
   config.security={
     csrf:false,
     domainWhiteList:['http://localhost:3000']
   }
   config.cors={
     credentials:true,
     allowMethods:'GET,POST'
   }
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
