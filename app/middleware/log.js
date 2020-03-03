module.exports=(options,app)=>{
    return async function log(ctx,next) {
        const start=Date.now()
        await next()
        console.log(`${ctx.request.url} 响应时间：${Date.now()-start}`)
    }
}