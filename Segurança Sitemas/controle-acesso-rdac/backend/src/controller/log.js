import db from "../config/database.js"

//insere os dados na tebela de log
export async function registerLog(obj) {
    try {

        const sql = "INSERT INTO logs (usuario, acao,  recurso_afetado, id_recurso_afetado, valor_antigo, valor_novo, campos_alterados, ip, status_acao) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
        const [rows] = db.query(sql, [obj.usuario, obj.acao, obj.recurso_afetado, obj.valor_antigo, obj.valor_novo, obj.campos_alterados, obj.ip, obj_staus_acao])

        if (rows.affected > 0) {
            return res.status(201)
        }

        return res.status(400)

    } catch (error) {
        return res.status(500).json
            ({
                success: false,
                message: "Ocorreu um erro."
            })
    }
}