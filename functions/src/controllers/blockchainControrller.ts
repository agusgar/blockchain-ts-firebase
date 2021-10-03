import express, { Router, Request, Response } from 'express';
import Blockchain from '../models/Blockchain';

// eslint-disable-next-line new-cap
const blockchainController: Router = express.Router();

const blockchain = new Blockchain([], []);

blockchainController.use('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Blockhain get working',
    blockchain,
  });
});

export default blockchainController;
