import dotenv from "dotenv";
import { server } from "./libs/service";

dotenv.config();
const port = Number(process.env.PORT) || 3000;

server(port);
