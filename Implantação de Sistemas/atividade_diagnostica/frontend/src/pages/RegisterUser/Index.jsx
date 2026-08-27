import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const RegisterUser = () => {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()

        const usuario = {
            nome,
            email,
            senha
        }

        try {
            const resposta = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });

            const dados = await resposta.json();

            if (resposta.ok) {
                alert("Usuário cadastrado com sucesso")

                setNome("");
                setEmail("");
                setSenha("");

                navigate("/login");

            } else {
                alert(dados.erro)
            }

        } catch (error) {
            console.log("Erro:", error);
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md rounded-xl p-8">
                <h1 className="text-3xl font-bold text-center text-[#072344] mb-2">
                    Cadastre-se
                </h1>

                <form className="space-y-5" onSubmit={handleRegister}>
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Digite seu nome"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#189aa4] focus:border-transparent"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            E-mail
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#189aa4] focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Senha
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Digite sua senha"
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#189aa4] focus:border-transparent"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button
                        className="w-full bg-[#13838c] text-white py-2.5 rounded-lg hover:bg-[#189aa4] transition-colors font-medium hover:cursor-pointer"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Já possui uma conta?{" "}
                    <NavLink
                        to="/login"
                        className="text-[#072344] font-semibold hover:underline"
                    >
                        Entre aqui
                    </NavLink>
                </p>
            </div>
        </div>
    )
}

export default RegisterUser