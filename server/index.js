import Koa from 'koa'
import next from 'next'
import Router from 'koa-router'

const { NODE_ENV } = process.env

const dev = NODE_ENV !== 'production'
const n = next({
	dev
})
const handle = n.getRequestHandler()

const { log } = console

log(`App is running in ${!NODE_ENV ? 'development' : 'production'} mode.`)
log(`Waiting for building...`)

n.prepare().then(() => {
	const app = new Koa(),
		router = new Router()

	router.get('/user/:user', async ctx => {
		await n.render(ctx.req, ctx.res, '/user', ctx.params)
		ctx.respond = false
	})

	router.get('/group/:group', async ctx => {
		await n.render(ctx.req, ctx.res, '/group', ctx.params)
		ctx.respond = false
	})

	router.get('*', async ctx => {
		await handle(ctx.req, ctx.res)
		ctx.respond = false
	})

	app
		.use(async (ctx, next) => {
			ctx.res.statusCode = 200
			if (ctx.status !== 200) {
				n.render(ctx.req, ctx.res, '/_error')
			}
			await next()
		})
		.use(router.routes())
		.listen(80, () => log('Go to localhost, bro'))
})
