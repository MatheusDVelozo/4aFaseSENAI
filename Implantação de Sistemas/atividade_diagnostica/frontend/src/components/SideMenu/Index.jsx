import {
  Home,
  CalendarDays,
  Users,
  UserRound,
  Clock,
  MessageCircle,
  FileText,
  BarChart3,
  Settings,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { nome: "Home", icone: Home, rota: "/" },
  { nome: "Agendamentos", icone: CalendarDays, rota: "/agendamentos" },
  { nome: "Profissionais", icone: Users, rota: "/profissionais" },
  { nome: "Clientes", icone: UserRound, rota: "/clientes" },
  { nome: "Disponibilidade", icone: Clock, rota: "/disponibilidade" },
  { nome: "Interações", icone: MessageCircle, rota: "/interacoes" },
  { nome: "Histórico", icone: FileText, rota: "/historico" },
  { nome: "Relatórios", icone: BarChart3, rota: "/relatorios" },
  { nome: "Configurações", icone: Settings, rota: "/configuracoes" },
];

function SideMenu() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col bg-[#08294d] text-white">

      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0bb5b0]">
          <Sparkles size={24} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">Faxinex</h1>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-2">

        {menuItems.map((item, index) => {
          const Icone = item.icone;

          return (
            <Link
              key={item.nome}
              to="/"
              className={`mb-1 flex items-center gap-4 rounded-md px-5 py-4 text-base ${index === 0
                  ? "bg-[#123b66] text-[#16d4ce]"
                  : "text-gray-200 hover:bg-[#123b66]"
                }`}
            >
              <Icone size={22} />

              <span>{item.nome}</span>
            </Link>
          );
        })}

      </nav>

      

    </aside>
  );
}

export default SideMenu;