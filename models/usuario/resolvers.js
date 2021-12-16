import { UserModel } from "./usuario.js";

const resolversUsuario = {

  Query:{
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {

      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
  },

  Mutation:{
    crearUsuario: async (parent, args) => {
      const crearUsuario = await UserModel.create({
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        tipoUsuario: args.tipoUsuario,
      });

      //Validacion para los campos opcionales por si llegan a ser diligenciados.
      if (Object.keys(args).includes('estado')) {
        crearUsuario.estado = args.estado;
      }
      return crearUsuario;
    },
    editarUsuario: async (parent, args) => {
      const editarUsuario = await UserModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        apellido: args.apellido,
        identificacion: args.identificacion,
        correo: args.correo,
        tipoUsuario: args.tipoUsuario,
        estadoUsuario: args.estadoUsuario, 
      });      
      return editarUsuario;
    },
    eliminarUsuario: async (parent, args) => {
      const eliminarUsuario = await UserModel.findOneAndDelete({ _id: args._id });
      return eliminarUsuario;
    },

  }
}


export { resolversUsuario };