import { Router } from "express";
import { agregarAlumnos, editarAlumnos, eliminarAlumnos, renderAlumnos, renderEditarAlumnos, statusAlumnos } from "../controllers/alumnosController";
import { agregarAsignaturas, editarAsignaturas, eliminarAsignaturas, renderAsignaturas, renderEditarAsignaturas, statusAsignaturas } from "../controllers/asignaturasController";
import { agregarProfesores, editarProfesores, eliminarProfesores, renderEditarProfesores, renderProfesores, statusProfesores } from "../controllers/profesoresController";

const router = Router();

router.get("/", (req, res) => {
  res.render('index');
});

router.get("/alumnos/agregar", renderAlumnos );

router.post("/alumnos/agregar", agregarAlumnos );

router.get("/alumnos/update/:id", renderEditarAlumnos );

router.post("/alumnos/update/:id", editarAlumnos);

router.get("/alumnos/delete/:id", eliminarAlumnos);
  
router.get("/alumnos/status/:id", statusAlumnos);

router.get("/asignaturas/agregar", renderAsignaturas);

router.post("/asignaturas/agregar", agregarAsignaturas);

router.get("/asignaturas/update/:id", renderEditarAsignaturas);

router.post("/asignaturas/update/:id", editarAsignaturas);

router.get("/asignaturas/delete/:id", eliminarAsignaturas);
  
router.get("/asignaturas/status/:id", statusAsignaturas);

router.get("/profesores/agregar", renderProfesores);

router.post("/profesores/agregar", agregarProfesores);

router.get("/profesores/update/:id", renderEditarProfesores);

router.post("/profesores/update/:id", editarProfesores);

router.get("/profesores/delete/:id", eliminarProfesores);
  
router.get("/profesores/status/:id", statusProfesores);

export default router;
