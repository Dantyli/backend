const {Service}=require('egg')
class  BaseService extends Service{
    /**
     * 直接执行sql语句
     */
    sql(query){
        const {app}=this
        return app.mysql.query(query)
    }
    //mysql.escape()防止sql注入
    escape(param){
        const {app}=this
        return app.mysql.escape(param)
    }
}
module.exports=BaseService;