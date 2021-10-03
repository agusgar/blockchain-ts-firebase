import express, { Router, Request, Response } from 'express';

// eslint-disable-next-line new-cap
const transactionsRouter: Router = express.Router();

transactionsRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Transactions get working',
  });
});

transactionsRouter.post('/', (req: Request, res: Response) => {
  const body = req.body;
  console.log('This is the body', body, 'It has type:', typeof body);
  res.status(200).json({
    message: 'Transactions post working',
  });
});

export default transactionsRouter;
