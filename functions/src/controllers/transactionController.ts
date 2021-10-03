import express, { Router, Request, Response } from 'express';
import { Transaction } from '../models/types';
import { blockchain } from './blockchainControrller';

// eslint-disable-next-line new-cap
const transactionsRouter: Router = express.Router();

transactionsRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Transactions get working',
  });
});

transactionsRouter.post('/', (req: Request, res: Response) => {
  const transaction = req.body as Transaction;

  blockchain.createNewTransaction(
      transaction.amount,
      transaction.category,
      transaction.createdAt,
      transaction.currency,
  );

  console.log('The transaction was added correctly!');

  res.status(200).json({
    message: 'The transaction was added correctly!',
    blockchain,
  });
});

export default transactionsRouter;
