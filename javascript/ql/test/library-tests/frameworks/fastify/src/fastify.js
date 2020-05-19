var fastify = require("fastify")();

fastify.get(
  "/",
  /* handler */ async (request, reply) => {
    return { hello: "world" }; // response
  }
);

fastify.route({
  method: "GET",
  url: "/",
  onRequest: /* handler */ (request, reply, done) => {},
  preParsing: /* handler */ (request, reply, done) => {},
  preValidation: /* handler */ (request, reply, done) => {},
  preHandler: /* handler */ (request, reply, done) => {},
  preSerialization: /* handler */ (request, reply, payload, done) => {},
  onSend: /* handler */ (request, reply, payload, done) => {},
  onResponse: /* handler */ (request, reply, done) => {},
  handler: /* handler */ (request, reply) => {}
});

fastify.get(
  "/",
  opts,
  /* handler */ (request, reply) => {
    reply.send({ hello: "world" }); // response
  }
);

fastify.post(
  "/:params",
  options,
  /* handler */ function(request, reply) {
    // request properties
    request.query.name; // the parsed querystring
    request.body; // the body
    request.params.name; // the params matching the URL
    request.headers.name; // the headers

    // reply properties
    reply.header("name", "value"); // Sets a response header.
    reply.headers({ name: "value" }); // Sets all the keys of the object as a response headers.
    reply.redirect(code, url); // Redirect to the specified url, the status code is optional (default to 302).
    reply.send(payload); // Sends the payload to the user, could be a plain text, a buffer, JSON, stream
  }
);
fastify.listen(3000);
