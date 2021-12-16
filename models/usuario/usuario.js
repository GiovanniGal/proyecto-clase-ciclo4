import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  correo:{
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
      },
      /* (email) => {
        if (email.includes('@') && email.includes('.')) {
          return true;
        } else {
          return false;
        }
      }, */
      message: 'El formato de correo no corresponde',
    }
  },
  identificacion:{
    type:String,
    required:true,
    unique:true,
  },
  nombre:{
    type:String,
    required:true,
  },
  apellido:{
    type:String,
    required:true,
  },
  tipoUsuario:{
    type:String,
    required:true,
    enum: ['ESTUDIANTE', 'LIDER', 'ADMINISTRADOR'],
  },
  estadoUsuario:{
    type:String,
    enum: ['PENDIENTE', 'AUTORIZADO', 'NO AUTORIZADO'],
    default: 'PENDIENTE',
  }
});

const UserModel = model('User', userSchema);

export { UserModel };