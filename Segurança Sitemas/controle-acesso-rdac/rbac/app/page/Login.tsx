"use client"


import React, { useState } from 'react'
import { login, type Session } from '../services/login'
import Home from '../page/Home'
import Register from './Register'

const Login = () => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const [session, setSession] = useState<Session | null>(null)
    const [error, setError] = useState("")
    const [showRegister, setShowRegister] = useState(false)
    const [notice, setNotice] = useState("")

    const handleLogin = async (event: any) => {

        event.preventDefault()

        try {

            const result = await login(email, senha)
            setSession(result)
            setSenha("")
        } catch (error) {
            console.error("Erro ao fazer login:", error)
        }
    }

    return (
        <>
            <div>
                {/* {SEM SESÃO MOSTRAMOS O LOGIN, COM SESSÃO MOSTRAMOS A LISTA, A HOME DO SISTEMA} */}
                {
                    session ? (
                        <Home
                            session={session}
                            onLogout={() => {
                                setSession(null);
                                setEmail("");
                                setSenha("")
                            }}
                        />
                    ) : showRegister ? (
                        <Register
                            onBack={() => setShowRegister(false)}
                            onRegistered={message => {
                                setShowRegister(false);
                                setNotice(message);
                            }}
                        />
                    ) : (
                        <form action="">
                            <div>
                                <label htmlFor='email'>E-mail</label>
                                <input type='text' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor='senha'>Senha</label>
                                <input type='password' name='senha' id='senha' value={senha} onChange={(e) => setSenha(e.target.value)} required />
                            </div>
                            <button type="submit">Entrar</button>

                        </form>

                    )
                }
            </div>
        </>
    )
}

export default Login