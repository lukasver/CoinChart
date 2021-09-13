import express from 'express';
// import mainController from './main';

export default express.Router().get('/', (req, res) => {
  res.status(200).json({ message: 'OK' });
});
