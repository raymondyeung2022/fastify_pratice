import Fastify from "fastify";
import pino from "pino";

const fastify = Fastify({
    loggerInstance: pino().child(
        { name: "logger" },
        {
        serializers: {
            req(req) {
            return {
                hostname: req.hostname,
            };
            },
        },
        }
    ),
});

export default fastify