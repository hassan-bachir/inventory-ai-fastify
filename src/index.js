import Fastify from 'fastify';
import dotenv from 'dotenv';
import inventoryRoutes from './routes/inventory.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fastify = Fastify({ logger: true });

const ejs = await import('ejs');

fastify.register(import('@fastify/view'), {
  engine: { ejs },
  root: path.join(__dirname, 'views'),
});

fastify.register(import('@fastify/formbody'));
fastify.register(import('@fastify/static'), {
  root: path.join(__dirname, '../public'),
});
fastify.register(import('@fastify/cors'));
fastify.register(inventoryRoutes);

fastify.get('/', async (req, reply) => {
  return reply.view('index.ejs');
});

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
