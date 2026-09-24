import {Router} from 'express';
import {lista, deleta} from '../controllers/materials.js';
import { authenticate, retquireRole } from '../middleware/auth.js'; 

const routerMaterials = Router();

//autenticação: todas rotas abaixo exigem token
routerMaterials.use(authenticate);

routerMaterials.get("/listar", lista);

routerMaterials.delete("/:id", retquireRole("admin"), deleta);

export default routerMaterials;


