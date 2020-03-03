//所有Controller继承此类
const {Controller}=require('egg')
class BaseController extends Controller{
    /**
     * 响应集中处理
     */
    ok(param={}){
        const {ctx}=this
        let params={code:'100200',...param}
        ctx.body={
            ...param,
            msg:ctx.helper.codeMsg[params.code]
        }
    }
    //输出info级别log
    log(str){
        this.ctx.logger.info(str)
    }
}
module.exports=BaseController;