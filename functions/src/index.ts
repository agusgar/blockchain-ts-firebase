import * as functions from 'firebase-functions';
import express, { Application } from 'express';
import admin from 'firebase-admin';
import transactionController from './controllers/transactionController';
import blockchainController from './controllers/blockchainControrller';

admin.initializeApp();

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/transactions', transactionController);
app.use('/blockchain', blockchainController);

app.get('/', (req, res) => {
  res.json({result: 'Everything good'});
});

exports.app = functions.https.onRequest(app);
