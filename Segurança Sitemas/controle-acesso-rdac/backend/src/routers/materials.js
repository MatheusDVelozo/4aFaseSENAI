import { Router } from "express";
import { deleta,lista} from "../controller/materials.js";
import { authenticate,requireRole } from "../middlewares/auth.js";



const routerMaterials = Router()

routerMaterials.use(authenticate)

routerMaterials.get("/listar", lista)




routerMaterials.delete("/:id",requireRole("admin"),deleta)


export default routerMaterials