import Fastify from 'fastify';

const server = Fastify({
  logger: true,
});

server.get('/news', (req, res) => {
  res.send({ hello: 'world' });
});

server.listen({ port: 3000 }, function (err, address) {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
