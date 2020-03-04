const Controller=require('../core/baseController')
class User extends Controller{
    async sendCode(){
        const {ctx}=this;
       const param={
            eamil:'leece2012@163.com',
            sub:'test',
            text:'测试邮件',
            html:'<h2>code:1234</h2>'
        }
        const result=await ctx.service.tools.sendMail(param)
        if(result){
            this.ok()
        }else{
            this.ok({code:'100500'})
        }
    }
}
module.exports=User;