import mysql2 from "mysql2/promise"
import dotenv from "dotenv"




dotenv.config()

export const db = mysql2.createPool({
    host: process.env.BD_HOST || "localhost",
    user: process.env.BD_USER || "ROOT",
    password: process.env.BD_PASSWORD||"senai",
    database: process.env.BD_DATABASE ||"desi20251",
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
})