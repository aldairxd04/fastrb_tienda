import { Schema, model } from "mongoose"

const celularEsquema = new Schema(
    {
        clave: {
            type: String,
            required: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        fechaLanzamiento: {
            type: Date,
            required: true,
            
        },
        RAM: {
            type: String,
            required: true,
        },
        almacenamiento: {
            type: String,
            required: true,
        },
        cantCamaras: {
            type: String,
            required: true,
        },
        opcion: {
            type: Boolean,
            default: false,
        },

    },
    {
        timestamps: true,
        versionKey: false
    }
);

export default model("Celulares", celularEsquema);
