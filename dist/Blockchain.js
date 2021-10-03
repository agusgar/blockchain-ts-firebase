"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sha256_1 = __importDefault(require("sha256"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var Blockchain = /** @class */ (function () {
    function Blockchain(blocks, transactions) {
        this.blocks = blocks;
        this.transactions = transactions;
        if ((0, isEmpty_1.default)(this.blocks)) {
            var genesisBlock = {
                createdAt: Date.now(),
                nonce: 100,
                current: "0",
                previous: "0",
                index: 1,
                transactions: [],
            };
            this.blocks = [genesisBlock];
        }
    }
    Blockchain.prototype.createNewBlock = function () {
        var newBlock = {
            previous: this.getLastBlock().current,
            transactions: this.transactions,
            createdAt: Date.now(),
            index: this.getLastBlock().index + 1,
        };
        this.transactions = [];
        this.blocks = __spreadArray(__spreadArray([], this.blocks, true), [this.getBlockWithHash(newBlock)], false);
    };
    Blockchain.prototype.getHash = function (previous, transactions, nonce) {
        var text = previous + nonce.toString() + JSON.stringify(transactions);
        return (0, sha256_1.default)(text);
    };
    Blockchain.prototype.getBlockWithHash = function (block) {
        var nonce = 0;
        var hash = this.getHash(block.previous, block.transactions, nonce);
        while (hash.slice(0, 4) !== "0000") {
            nonce++;
            hash = this.getHash(block.previous, block.transactions, nonce);
        }
        return __assign(__assign({}, block), { current: hash, nonce: nonce });
    };
    Blockchain.prototype.createNewTransaction = function (amount, category, createdAt, currency) {
        var newTransaction = {
            amount: amount,
            category: category,
            createdAt: createdAt,
            currency: currency,
        };
        this.transactions = __spreadArray(__spreadArray([], this.transactions, true), [newTransaction], false);
    };
    Blockchain.prototype.getLastBlock = function () {
        return this.blocks.slice(-1)[0];
    };
    return Blockchain;
}());
exports.default = Blockchain;
//# sourceMappingURL=Blockchain.js.map