import express, { Router, Request, Response } from 'express';
import Blockchain from '../models/Blockchain';

// eslint-disable-next-line new-cap
const blockchainController: Router = express.Router();

export const blockchain = new Blockchain([], []);

blockchainController.post('/mine', (req: Request, res: Response) => {
  blockchain.createNewBlock();

  res.status(200).json({
    message: 'Blockhain mined correctly!',
    blockchain,
  });
});

blockchainController.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Blockhain get working',
    blockchain,
  });
});

export default blockchainController;

