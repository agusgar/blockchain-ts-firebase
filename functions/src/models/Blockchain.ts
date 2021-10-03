/* eslint-disable require-jsdoc */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Block, NewBlock, Transaction } from './types';
import sha from 'sha256';
import isEmpty from 'lodash/isEmpty';


class Blockchain {
  blocks: Block[];
  transactions: Transaction[];

  constructor(blocks: Block[], transactions: Transaction[]) {
    this.blocks = blocks;
    this.transactions = transactions;

    if (isEmpty(this.blocks)) {
      const genesisBlock: Block = {
        createdAt: Date.now(),
        nonce: 100,
        current: '0',
        previous: '0',
        index: 1,
        transactions: [],
      };

      this.blocks = [genesisBlock];
    }
  }

  createNewBlock() {
    const newBlock: NewBlock = {
      previous: this.getLastBlock().current,
      transactions: this.transactions,
      createdAt: Date.now(),
      index: this.getLastBlock().index + 1,
    };

    this.transactions = [];
    this.blocks = [...this.blocks, this.getBlockWithHash(newBlock)];
  }

  getHash(previous: string, transactions: Transaction[], nonce: number) {
    const text = previous + nonce.toString() + JSON.stringify(transactions);
    return sha(text);
  }

  getBlockWithHash(block: NewBlock): Block {
    let nonce = 0;
    let hash = this.getHash(block.previous, block.transactions, nonce);

    while (hash.slice(0, 4) !== '0000') {
      nonce++;
      hash = this.getHash(block.previous, block.transactions, nonce);
    }

    return {
      ...block,
      current: hash,
      nonce,
    };
  }

  createNewTransaction(
      amount: number,
      category: string,
      createdAt: number,
      currency: string) {
    const newTransaction: Transaction = {
      amount,
      category,
      createdAt,
      currency,
    };
    this.transactions = [...this.transactions, newTransaction];
  }

  getLastBlock() {
    return this.blocks.slice(-1)[0];
  }
}

export default Blockchain;
