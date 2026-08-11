import { createBrowserRouter,  RouterProvider,} from 'react-router-dom';
import RegisterUser from './pages/RegisterUser/Index';
import Login from './pages/Login/Index';
import Home from './pages/Home/Index';
import Agendamentos from './pages/Agendamentos/Index';
import Profissionais from './pages/Profissionais/Index';
import Clientes from './pages/Clientes/Index';
import Relatorios from './pages/Relatorios/Index';
import Historico from './pages/Historico/Index';
import Disponibilidade from './pages/Disponibilidade/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterUser />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/",
    element: <Agendamentos />
  },
  {
    path: "/",
    element: <Profissionais />
  },
  {
    path: "/",
    element: <Clientes />
  },
  {
    path: "/",
    element: <Disponibilidade />
  },
  {
    path: "/",
    element: <Historico />
  },
  {
    path: "/",
    element: <Relatorios />
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
