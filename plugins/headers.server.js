export default function (ctx, inject) {
  const headers = ctx.req?.headers
  inject('headers', headers)
}
