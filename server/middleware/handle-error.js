const handleError = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (err.errorCode) {
      ctx.status = err.status || 500;
      ctx.body = {
        code: err.code,
        message: err.message,
        errorCode: err.errorCode,
        request: `${ctx.method} ${ctx.path}`,
      };
      ctx.log.error('handle',{
        status:ctx.status,
        method:ctx.method,
        path:ctx.path,
        body:ctx.request.body,
      })
    } else {
      ctx.app.emit('error', err, ctx);
    }
  }
};

export default handleError