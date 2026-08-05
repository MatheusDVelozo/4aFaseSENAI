import { createBrowserRouter,  RouterProvider,} from 'react-router-dom';
import RegisterUser from './pages/RegisterUser/Index';
import Login from './pages/Login/Index';

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
    path: "/",
    element: <RegisterUser />
  },
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
