import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

import authRouter from "./routers/auth.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRouter)

export default app;

