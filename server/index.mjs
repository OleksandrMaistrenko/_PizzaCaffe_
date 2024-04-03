import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const server = fastify();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

server.register(fastifyStatic, {
  root: join(__dirname, "../build"),
});

server.setNotFoundHandler((_, reply) => {
  return reply.sendFile("index.html");
});

const port = process.env.PORT || 1234;
const host = process.env.HOST || "localhost";

server.get("/go", (request, reply) => {
  return reply.send("GET request received");
});

server
  .listen({ port, host })
  .then((address) => {
    console.log("Server started" + address);
  })
  .catch((err) => {
    console.log("Error", err);
  });
