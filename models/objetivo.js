import mongoose from 'mongoose';
//import { ProjectModel } from "./proyecto/proyecto.js";

const { Schema, model } = mongoose;

const objetiveSchema = new Schema({

  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['GENERAL', 'ESPECIFICO'],
    required: true,
  },
/*   proyecto: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: ProjectModel,
  }, */

});

const ObjetiveModel = model('objetive', objetiveSchema);

export { ObjetiveModel };