import { ProjectModel } from "../models/projects";
import { UserModel } from "../models/user";

const resolvers = {
//Comentario
  Query:{
    Usuarios: async (parent, args) => {
      const usuarios = await UserModel.find();
      return usuarios;
    },
    Usuario: async (parent, args) => {

      const usuario = await UserModel.findOne({ _id: args._id });
      return usuario;
    },
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find().populate('lider');
      return proyectos;
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
    crearProyecto:async (parent, args) => {
      const crearProyecto = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return crearProyecto;
      
    }
  }
}


export { resolvers };