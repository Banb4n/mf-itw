"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var DATABASE_PATH = './server/db.json';
var getPlaybooks = function (req, res) {
    try {
        var data = fs_1.default.readFileSync(DATABASE_PATH, 'utf8');
        console.log(data);
        res.status(200).send(JSON.stringify(data));
    }
    catch (err) {
        console.error(err);
    }
};
exports.default = getPlaybooks;
