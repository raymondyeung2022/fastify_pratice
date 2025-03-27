import LogRocket from 'logrocket';
import fastify from './libs/fastify.js';
import fastifySwagger from '@fastify/swagger';
import itemRoutes from './routes/ItemsRoute.js';
import userRoutes from './routes/UsersRoute.js';

LogRocket.init('idjg3h/dooonut');


const HOST = "0.0.0.0"
const PORT = 5000

fastify.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: '/docs',
  swagger: {
    info: { title: 'fastify-api' },
  },
})
fastify.register(itemRoutes)
fastify.register(userRoutes)

const start = async () => {
  try {
    await fastify.listen({port : PORT, host: HOST})
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

start()
