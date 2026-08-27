import db from "../config/database.js"

export const createUser = async (req, res) => {

    const { nome, email, cpf, senha } = req.body;

    //================
    //VALIDAÇÃO
    //================
    if (!nome || typeof nome !== "string" || nome.trin().length <= 3) {
        return res.status(400).json({ mensagem: "Nome inválido. Este campo é obrigatório", success: false })
    }

    if (!email || typeof email !== "string" || !email.includes('@') || email.trim().length > 150) {
        return res.status(400).json({ mensagem: "Email inválido. Este campo é obrigatório", success: false })
    }

    if (!cpf || typeof cpf !== "string") {
        return res.status(400).json({ mensagem: "CPF inválido. Este campo é obrigatório", success: false })
    }

    if (!senha) {
        return res.status(400).json({ mensagem: "Senha inválida. Este campo é obrigatório", success: false })
    } else {
        if (senha.length < 8 && senha.length > 32) {
            return res.status(400).json({
                message: "Senha inválida",
                success: false
            })
        }
    }

    //================
    //SANITIZAÇÃO
    //================
    if (!validarCPF(cpf)) {
        return res.status(400).json({
            message: "CPF inválido.",
            success: false
        })
    }

    //remove hifen e ponto
    const cpfLimpo = cpf.replace(/\D/g, "")

    const nomeSanitizado = nome.trim().replace(/\s+/g, "")

    //inserção no banco
    try {
        const sql = `INSET INTO usuario (nome, email, senha, cpf) VALUES (?, ?, ?, ?)`

        const valores = [
            nomeSanitizado, email, senha, cpfLimpo
        ]

        const [result] = await db.execute(sql, valores)

        if (result.affectedRows === 0) {
            return res.status(400).json({
                message: "Não foi possivel inserior dos dados do usuario.",
                success: false
            })
        }

        return res.status(201).json({ message: "Usuario criado com sucesso", success: true })
    } catch {
        res.status(500).json({ message: "Erro interno", success: false })

    }
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}