import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function inventoryRoutes(fastify, opts) {
  // Get all inventory
  fastify.get('/inventory', async (req, reply) => {
    const items = await prisma.inventoryItem.findMany();
    return items;
  });

  // Create item
  fastify.post('/inventory', async (req, reply) => {
    const { name, quantity, category, details, status } = req.body;
    const item = await prisma.inventoryItem.create({
      data: { name, quantity, category, details, status },
    });
    return item;
  });

  // Update item
  fastify.put('/inventory/:id', async (req, reply) => {
    const { id } = req.params;
    const data = req.body;
    const item = await prisma.inventoryItem.update({
      where: { id },
      data,
    });
    return item;
  });

  // Delete item
  fastify.delete('/inventory/:id', async (req, reply) => {
    const { id } = req.params;
    await prisma.inventoryItem.delete({ where: { id } });
    return { message: 'Deleted' };
  });

  // Search
  fastify.get('/inventory/search', async (req, reply) => {
    const { q } = req.query;
    const results = await prisma.inventoryItem.findMany({
      where: {
        OR: [
          { name: { contains: q, mode: 'insensitive' } },
          { category: { contains: q, mode: 'insensitive' } },
          { status: { equals: q.toUpperCase() } },
        ],
      },
    });
    return results;
  });
}
