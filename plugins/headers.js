export default function (ctx, inject) {
  const headers = ctx.req?.headers ?? 'undefined! (from plugins/headers.js)'
  inject('headers', headers)
}
