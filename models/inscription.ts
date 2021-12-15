import { Schema, model } from "mongoose";
import { ProjectModel } from "./projects";
import { UserModel } from "./user";

const inscriptionSchema = new Schema ({
  estado: {
    type: String,
    enum: ['Aceptada', 'Rechazada'],
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: true,
  },
  fechaEgreso: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  }


});

const InscriptionModel = model('inscription', inscriptionSchema);

export { InscriptionModel };