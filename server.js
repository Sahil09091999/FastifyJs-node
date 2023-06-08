const PORT = process.env.PORT || 5000;

const fastify = require('./src/app')({
    logger: true,
});

const start = async () => {
    try {
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
};

start();
