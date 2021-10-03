"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Blockchain_1 = __importDefault(require("./Blockchain"));
var blockchain = new Blockchain_1.default([], []);
console.log(blockchain);
blockchain.createNewTransaction(1289, "tech", Date.now(), "EUR");
console.log(blockchain);
blockchain.createNewBlock();
console.log(blockchain);
blockchain.createNewTransaction(12000, "tech", Date.now(), "UYU");
blockchain.createNewTransaction(100, "self_improvement", Date.now(), "EUR");
blockchain.createNewBlock();
console.log(blockchain);
console.log("Transactions in 3rd block: ", blockchain.blocks[2].transactions);
//# sourceMappingURL=index.js.map