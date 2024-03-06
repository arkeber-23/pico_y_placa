import { Router } from 'express';
import PicoPlacaController from '../controller/PicoPlacaController';
const router = Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'PICO Y PLACA' });
});

router.post('/pico-placa', (req, res) => {

  const numb = req.body.number;
  const week = req.body.week;

  const result  =  PicoPlacaController.PicoPlaca({
    numeroPlaca: numb,
    diaSemana: week
  });
  res.status(200).json({ result });
});

export { router }