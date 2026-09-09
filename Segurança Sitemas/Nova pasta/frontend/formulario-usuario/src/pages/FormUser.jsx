import { useState } from "react"
import { create } from "../services/user"

const FormUser = () => {

    const [form, setForm] = useState({
        nome: '',
        cpf: '',
        email: '',
        senha: ''
    })

    const [erros, setErros] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const validaFormulario = () => {
        const novosErros = []

        //home
        if (!form.nome || form.nome.trim().length < 3) {
            novosErros.nome = "O campo nome é obrigatório e deve ter no minimo 3 caracteres"
        }

        //cpf
        if (!form.cpf || form.cpf.trim().length < 3) {
            novosErros.cpf = "O campo  cpf é obrigatório e deve ter 11 caracteres"
        }

        //email
        if (!form.email || form.email.trim().length < 3) {
            novosErros.email = "O campo  email é obrigatório e deve ser válido"
        }

        //senha
        if (!form.senha || form.senha.trim().length < 3) {
            novosErros.senha = "O campo  senha é obrigatório e deve ter entre 8 e 32 caracteres"
        }

        setErros(novosErros)

        return Object.keys(novosErros).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validaFormulario())
            return

        try {
            const resultado = await create(form)
            console.log("Resultado: ", resultado);
        } catch (error) {
            console.log("Ocorreu um erro ao enviar a requisição", error);
        }
    }

    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Digite seu nome completo" />
                </div>
                <div>
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        value={form.cpf}
                        onChange={handleChange}
                        placeholder="XXX.XXX.XXX-XX" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="exemplo@email.com" />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        value={form.senha}
                        onChange={handleChange}
                        placeholder="Digite sua senha de 8 a 32 caracteres" />
                </div>

                {erros.nome && (
                    <p style={{ color: '#f00' }}>{erros.nome}</p>
                )}
                {erros.cpf && (
                    <p style={{ color: '#f00' }}>{erros.cpf}</p>
                )}
                {erros.email && (
                    <p style={{ color: '#f00' }}>{erros.email}</p>
                )}
                {erros.senha && (
                    <p style={{ color: '#f00' }}>{erros.senha}</p>
                )}

                <button type="submit">Cadastrar</button>

            </form>
        </div>
    )
}

export default FormUser