export interface Block {
  index: number;
  current: string;
  previous: string;
  transactions: Transaction[];
  createdAt: number;
  nonce: number;
}

export type NewBlock = Omit<Block, 'current' | 'nonce'>;

export interface Transaction {
  amount: number;
  currency: string;
  category: string;
  createdAt: number;
}
