import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { coffee, pizzas } from "./menu/menu.mjs";
import fastifyCors from "@fastify/cors";

const server = fastify();

server.register(fastifyCors, {
  origin: "*",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-Type",
    "Authorization",
  ],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
});

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

server.get("/pizzas", (request, reply) => {
  console.log(pizzas);
  return pizzas;
});

server.get("/coffee", (request, reply) => {
  return coffee;
});

server
  .listen({ port, host })
  .then((address) => {
    console.log("Server started" + address);
  })
  .catch((err) => {
    console.log("Error", err);
  });
