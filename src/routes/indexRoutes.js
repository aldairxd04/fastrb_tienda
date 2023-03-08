import { Router } from "express";
import { agregarCelulares, editarCelulares, eliminarCelulares, renderCelulares, renderEditarCelulares, statusCelulares } from "../controllers/celularController";


const router = Router();

router.get("/", (req, res) => {
  res.render('index');
});

router.get("/")

router.get("/celulares/agregar", renderCelulares );

router.post("/celulares/agregar", agregarCelulares );

router.get("/celulares/update/:id", renderEditarCelulares );

router.post("/celulares/update/:id", editarCelulares);

router.get("/celulares/delete/:id", eliminarCelulares);
  
router.get("/celulares/status/:id", statusCelulares);


export default router;
