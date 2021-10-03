"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_functions_1 = __importDefault(require("firebase-functions"));
var express_1 = __importDefault(require("express"));
var firebase_admin_1 = __importDefault(require("firebase-admin"));
firebase_admin_1.default.initializeApp();
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.json({ result: "Everything good" });
});
exports.app = firebase_functions_1.default.https.onRequest(app);
//# sourceMappingURL=index.js.map