import mongoose from "mongoose";
import { ObjetiveModel } from "../objetivo.js";
import { UserModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const projectSchema = new Schema({

  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  presupuesto: {
    type: Number,
    required: true,
  },
  fechaInicio: {
    type: Date,
    required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ['ACTIVO', 'INACTIVO'],
    default: 'INACTIVO',
  },
  fase: {
    type: String,
    required: true,
    enum: ['INICIADO', 'DESARROLLO', 'TERMINADO', 'NULO'],
    default: 'NULO',
  },
  lider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: UserModel,
  },
/*   objetivos: [
    {
      type: Schema.Types.ObjectId,
      ref: ObjetiveModel,
    },  
  ],  */
  objetivos: [
    {
      descripcion: {
        type: String,
        required: true,
      },
      tipo: {
        type: String,
        enum: ['GENERAL', 'ESPECIFICO'],
        required: true,
      },
    }
  ]
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

projectSchema.virtual('avances', {
  ref: 'advance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'inscription',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProjectModel = model('project', projectSchema);

export { ProjectModel };

