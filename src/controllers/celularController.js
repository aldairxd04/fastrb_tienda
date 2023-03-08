import Celulares from "../models/Celulares";

export const renderCelulares = async (req, res) => {
    const celulares = await Celulares.find().lean();
    res.render('agregarCelulares', { celulares: celulares });
};

export const agregarCelulares = async (req, res) => {
    const celulares = Celulares(req.body);
    await celulares.save();
    res.redirect("/celulares/agregar");
};

export const renderEditarCelulares = async (req, res) => {
    try {
        const celulares = await Celulares.findById(req.params.id).lean();
        res.render('editarAlumnos', { celulares });
    } catch (error) {
        console.log(error.message);
    }
}

export const editarCelulares = async (req, res) => {
    try {
        const { id } = req.params;
        await Celulares.findByIdAndUpdate(id, req.body);
        res.redirect("/celulares/agregar");
    } catch (error) {
        console.log(error)
    }
}

export const eliminarCelulares = async (req, res) => {
    const { id } = req.params;
    await Celulares.findByIdAndDelete(id, req.body);
    res.redirect("/celulares/agregar");
}

export const statusCelulares = async (req, res) => {
    try {
        const {id} = req.params;
        const celulares = await Celulares.findById(id);

        celulares.opcion = !celulares.opcion;
        await celulares.save();

        res.redirect("/celulares/agregar");

    } catch (error) {
        console.log(error);
    }
}
