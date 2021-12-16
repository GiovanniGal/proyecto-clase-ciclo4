import { Schema, model } from "mongoose";
import { ProjectModel } from "./proyecto/proyecto";

const objetiveSchema = new Schema({

  descripcion: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ['General', 'Específico'],
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