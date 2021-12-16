import conectarBD from "./db/db";
import { ProjectModel } from "./models/proyecto/proyecto";
import { UserModel } from "./models/usuario/usuario";
import { ObjectId } from "mongoose";
import { ObjetiveModel } from "./models/objetivo";


const main = async () => {
  await conectarBD();

/*   const objetive = await ObjetiveModel.create({
    descripcion: "Este es el primer Objetivo Específico",
    tipo: 'Específicos',

  }); */

/*   const proyecto = await ProjectModel.find( {nombre: 'Proyecto 3' }).populate('lider');
  console.log('El proyecto es: ', proyecto); */

/*   const proyecto = await ProjectModel.find( {nombre: 'Proyecto 4' }).populate('lider').populate('objetivos');
  console.log('El proyecto es: ', JSON.stringify(proyecto)); */

/*   const lider = await UserModel.find({ _id: proyecto[0].lider });
  console.log('El lider del proyecto es: ', lider); */

  await ProjectModel.create({
    nombre: 'Proyecto 1',
    presupuesto: 920000,
    fechaInicio: Date.now(),
    fechaFin: new Date('2025/11/11'),
    lider: '61b6512c9df9945a3cf4dcc4',
    objetivos: [
      { descripcion: "Objetivo General del Proyecto", tipo: 'General' },
      { descripcion: "Objetivo Específico del Proyecto", tipo: 'Específico' },
      { descripcion: "Objetivo Específico del Proyecto", tipo: 'Específico' },
    ],
  })
  .then((p) => {
    console.log("Proyecto creado correctamente", p)
  })
  .catch((e) => {
    console.log("Error creando el proyecto", e)
  });

};

main();



// CRUD USUARIOS


  //Crear un Usuario
/*   await UserModel.create({
    correo: 'nic.comolas@hotmail',
    identificacion: '0909094',
    nombre: 'Nicolas',
    apellido: 'Galindo',
    tipoUsuario: 'Líder',
  }).then((u) => {
    console.log('Usuario creado con éxito', u);
  }).catch((e) => {
    console.error('Error creando el usuario', e);
  }); */

  //Obtener los usuarios
/*   await UserModel.find()
  .then((u) => {
    console.log('Usuarios: ', u);
  })
  .catch((e) => {
    console.error('Error obteniendo los usuarios ', e);
  }); */

  //OBTENER UN SOLO USUARIO
/*   await UserModel.findOne({ correo: 'giovanni09@gmail.com' })
  .then((u) => {
    console.log("El usuario consultado es: ",u)
  }).catch((e) => {
    console.log("Error en la consulta", e)
  }) */





  //Editar un usuario
  /* await UserModel.findOneAndUpdate({ correo: 'giovanni09@gmail.com' },
    //{ nombre: 'Juan',}
    )
    .then((u) => {
      console.log("Usuario Actualizado", u)
    })
    .catch((e) => {
      console.log("Error en la operación", e)
    }); */

    //ELIMINAR UN USUARIO
 /*    await UserModel.findOneAndDelete(
      { correo: 'giovanni@gmail.com' })
      .then((u) => {
        console.log("El usuario ha sido eliminado",u)
      })
      .catch((e) => {
        console.log("Error eliminando el registro", e)
      }); */
