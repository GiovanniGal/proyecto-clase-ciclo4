import { connect } from 'mongoose';
//const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect (process.env.DATABASE_URL).then(() => {
    console.log('Conexión DB Exitosa');
  }).catch((e) => {
    console.error('Error conectando a la BD', e);
  });
};

export default conectarBD;

