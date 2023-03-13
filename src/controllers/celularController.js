import Celulares from "../models/Celulares";

//get-agregar
export const renderCelulares = async (req, res) => {
    const celulares = await Celulares.find().lean();
    res.render("index", {celulares: celulares});
};

//post agregar
export const createCelulares = async (req, res) =>{
    try {
     const celulares = Celulares(req.body);
     await celulares.save();
     res.redirect("/");
    } catch (error) {
     console.log(error);
    }
 };

 //get update
 export const renderEditCelulares = async (req, res) => {
    try {
        const celulares = await Celulares.findById(req.params.id).lean();
        res.render("editar", {celulares});
    } catch (error) {
        console.log(error.message);
    }
};

//post update
export const updateCelulares = async (req, res) => {
    const { id } = req.params;
    await Celulares.findByIdAndUpdate(id, req.body);

    res.redirect("/");
};

//get delete
export const deleteCelulares = async (req, res) => {
    const { id } = req.params;
    await Celulares.findByIdAndDelete(id);

    res.redirect("/");
};

//get status
//get-status
export const statusCelulares = async (req, res) => {
    const { id } = req.params;
    const celulares = await Celulares.findById(id);
    //la propiedad opcion esta en Model
    celulares.opcion = !celulares.opcion;
    await celulares.save();
    res.redirect("/");
};
