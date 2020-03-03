//工具函数
const moment=require('moment')
module.exports={
    codeMsg:{
        100200:'success',
        100403:'权限不足',
        100422:'参数不合法',
        100500:'操作失败'
    },
    //系统时间
    now(){
        return moment.format('YYYY-MM-DD HH:mm:ss')
    }
}