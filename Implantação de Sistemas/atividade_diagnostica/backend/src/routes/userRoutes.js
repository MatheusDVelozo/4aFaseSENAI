const expres = require("express")
const prisma = require("../prisma")

const router = expres.Router()

router.post("/", async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const usuario = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha
            }
        })

        res.status(201).json(usuario)

    } catch (error) {

        if (error.code === "P2002") {
            return res.status(400).json({
                erro: "Email já cadastrado"
            });
        }

        res.status(500).json({
            erro: "Erro ao cadastrar usuário",
            detalhes: error.message
        });
    }
})

router.post("/login", async (req, res) => {
    const { email, senha } = req.body
    try {
        const usuario = await prisma.usuario.findUnique({
            where: {
                email: email
            }
        })

        if (!usuario) {
            return res.status(404).json({
                erro: "Usuário não encontrado"
            })
        }

        if (usuario.senha !== senha || usuario.email !== email) {
            return res.status(401).json({
                erro: "Email ou senha incorretos"
            })
        }

        res.json({
            mensagem: "Bem vindo, " + usuario.nome,
            usuario: {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            }
        })

    } catch (error) {
        res.status(500).json({
            erro: "Erro ao realizar login",
            detalhes: error.message
        })
    }

})

module.exports = router