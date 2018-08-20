import http from 'http'
import koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import mongoose from 'mongoose'
import path from 'path'
import views from 'koa-views'
import serve from 'koa-static'
import mount from 'koa-mount'
import jwt from 'koa-jwt'
import secret from './utils/secret'

// Use native promises
mongoose.Promise = global.Promise

export const app = new koa()
export const router = new koaRouter()
export const MONGODB_URL = `mongodb://${
  process.env.DB_PORT
? /* istanbul ignore next */ process.env.DB_PORT.replace('tcp://', '') // Docker linked mongodb
: 'localhost:27017'
}/${
  process.env.NODE_ENV === 'test'
? 'fishbow-test'
: /* istanbul ignore next */ 'fishbow'
}`
export const PORT = 3000

function koaGraphQLOptionsFunction(ctx) {
  return {
    schema
  , context: {
      user: ctx.state.user // From JWT middleware
    }
  }
}

router.get('/graphql', graphqlKoa(koaGraphQLOptionsFunction))
router.post('/graphql', graphqlKoa(koaGraphQLOptionsFunction))

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))
router.post('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

router.get('/', async ctx => await ctx.render('index.tlml'))
router.get('/admin', async ctx => await ctx.render('admin.tlml'))

app
.use(koaBody())
// Use tlml as template engine
.use(views(path.join(__dirname, 'views'), {
  engineSource: {
    tlml(path, options) {
      return compileTlmlFile(path, options.partials)
    }
  }
}))
// Mount static resources
.use(mount('/static', serve(path.join(__dirname, 'static'))))
// Mount JWT middleware
.use(mount('/graphql', jwt({ secret, passthrough: true })))
.use(router.routes())
.use(router.allowedMethods())

export const server = http.createServer(app.callback())

// Startup server programmatically
export function startup() {
  return new Promise(async resolve => {
    await mongoose.connect(MONGODB_URL)
    server.listen(PORT, resolve)
  })
}

// Shutdown server programmatically
export function shutdown() {
  return new Promise(resolve => {
    server.close(() => {
      mongoose.disconnect(resolve)
    })
  })
}

/* istanbul ignore if */
if (module === require.main) {
  startup()
  .then(() => console.log(`
    Live on http://localhost:${ PORT }/graphql
    Interactive playground on http://localhost:${ PORT }/graphiql
  `))
  .catch(error => console.error(error.message))
}