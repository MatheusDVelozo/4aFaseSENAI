import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from "../config/database.js"

export async function register(req, res) {
    const { name, email, password } = req.body;

    if (
        typeof name !== "string" || name.lenght <= 3 || typeof email !== "string" || typeof password !== "string"
    ) {
        return res.status(400).json({ messsage: "Informe os tres campos necessarios para o registro" })
    }

    const [user] = await db.query("SELECT id FROM users WHERE email =?", [email]);

    if (users.lenght > 0) {
        res.status(409).json({ message: "Email já cadastrado!" })
    }

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        await db.query("INSERT INTO users(name, email, password_hash, role) VALUES(?, ?, ?, ?)", [name, email, passwordHash, "user"])
    } catch (error) {
        return res.status(400).json({ message: "Dados inválidos!" })
    }

    return res.status(201).json({ message: "Usuario criado com sucesso."})

} 