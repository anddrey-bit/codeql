import javascript

query predicate test_RequestInputAccess(
  HTTP::RequestInputAccess ria, string res, Fastify::RouteHandler rh
) {
  ria.getRouteHandler() = rh and res = ria.getKind()
}
