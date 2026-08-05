import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md rounded-xl p-8">
                <h1 className="text-3xl font-bold text-center text-[#142f51] mb-2">
                    Entre com sua conta
                </h1>

                <form className="space-y-5">
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
                        />
                    </div>

                    <button
                        className="w-full bg-[#13838c] text-white py-2.5 rounded-lg hover:bg-[#189aa4] transition-colors font-medium hover:cursor-pointer"
                    >
                        Entrar
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Já possui uma conta?{" "}
                    <NavLink
                        to="/"
                        className="text-[#072344] font-semibold hover:underline"
                    >
                        Cadastre-se
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;