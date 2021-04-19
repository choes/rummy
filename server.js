import { Server } from "boardgame.io/server";
import { default as Rummy } from "./src/Rummy";

const server = Server({ games: [Rummy] });
server.run(8000);
