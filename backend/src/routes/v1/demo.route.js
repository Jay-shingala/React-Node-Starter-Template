import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const demoRouter = Router();

demoRouter.route('/').get((_req, res) => {
  try {
    res.status(StatusCodes.OK).send('demo route call');
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  }
});

export default demoRouter;
