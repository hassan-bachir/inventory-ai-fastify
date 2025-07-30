import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export function verifyToken(req, reply, done) {
  const auth = req.headers.authorization;
  if (!auth) return reply.status(401).send({ error: 'No token' });

  try {
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    done();
  } catch (err) {
    reply.status(401).send({ error: 'Invalid token' });
  }
}

export function requireAdmin(req, reply, done) {
  verifyToken(req, reply, () => {
    if (req.user.role !== 'ADMIN') {
      return reply.status(403).send({ error: 'Admin only' });
    }
    done();
  });
}
