import Fastify from 'fastify'
import env from 'dotenv'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

env.config({
  path: '.env'
})

const PORT = Number(process.env.PORT || 3333)

const app = Fastify({
  logger: true
})

app.register(cors)
app.register(appRoutes)

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