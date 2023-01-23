import Fastify from 'fastify'
import cors from '@fastify/cors'
import { routes } from './routes'
import env from 'dotenv'

env.config({
  path: '.env'
})

const PORT = Number(process.env.PORT || 3333)

// fastify

const app = Fastify({
  logger: true
})

app.register(cors)

routes.forEach(route => {
  app.route(route)
})

app.listen({
  port: PORT,
  host: '0.0.0.0'
}, function (err, address) {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  app.log.info(`server listening on ${address}`)
})