import { Schema, model } from "mongoose";
import { ProjectModel } from "./projects";
import { UserModel } from "./user";

const advanceSchema = new Schema({
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProjectModel,
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: [
    {
      type: String,
    },
  ],
  creadoPor: {
    type: Schema.Types.ObjectId,
    ref: UserModel,
    required: true,
  },

});

const AdvancementModel = model('advance', advanceSchema);

export { AdvancementModel };