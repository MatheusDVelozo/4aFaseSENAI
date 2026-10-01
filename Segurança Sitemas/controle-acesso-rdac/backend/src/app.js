import express from "express"
import cors from "cors"

import dotenv from "dotenv"
import router from "./routers/auth.js"
import routerMaterials from "./routers/materials.js"




dotenv.config()

export const app = express()

app.use(cors())
app.use(express.json())

app.use("/api",router)

app.use("/api/", routerMaterials)