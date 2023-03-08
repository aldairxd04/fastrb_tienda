import mongoose from "mongoose";

const celularSchema = new mongoose.Schema({
    clave: {
        type: String,
        required: true,
        unique: true
    },
    marca:{
        type: String,
            trim: true,
            required: true,
    },
    precio:{
        type: Number,
        trim: true,
        required: true,
    },
    fechaLanzamiento: {
        type: Date,
            required: true
    },
    RAM:{
        type: Number,
        required: true,
        unique: true
    },
    Almacenamiento:{
        type: Number,
        required: true,
        unique: true
    },
    cantCamaras:{
        type: Number,
        required: true,
        unique: true
    },
    opcion:{
        type: Boolean,
        default: false
    }
},
{
    timestamps: true,
    versionKey: false
});

export default model('Celular', celularSchema);