import Fastify from "fastify";
import * as dotenv from "dotenv";
import { connectToDatabase } from "./config/database";
import { articleRoutes } from "./routes/article.routes";


dotenv.config();

const server = Fastify({ 
    logger: true, 
    });

const PORT = parseInt(process.env.PORT || "3000", 10);


server.get("/", async (req, res ) => {
    return { message: "Welcome to the Personal Blogging API" };
});

server.register(articleRoutes, {prefix: "/articles"});

const start = async () => {
    try {
        await connectToDatabase();

        await server.listen({ port: PORT, host: "0.0.0.0" });
        console.log(`Server is running at ${PORT}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
