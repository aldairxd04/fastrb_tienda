import { Router } from "express"
import { createCelulares, deleteCelulares, renderCelulares, renderEditCelulares, statusCelulares, updateCelulares } from "../controllers/celularController";


const router =Router();

//PRODUCTOS
router.get('/', renderCelulares);

//Agregar productos
router.post("/celulares/agregar",  createCelulares);

//A buscar por id
router.get("/update/:id", renderEditCelulares);

//ACTUALIZA
router.post("/update/:id", updateCelulares);

//eliminar
router.get("/delete/:id", deleteCelulares);

//Status
router.get("/status/celulares/:id", statusCelulares);



export default router;