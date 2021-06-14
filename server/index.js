"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var api_1 = require("./api");
var app = express_1.default();
var PORT = 3001;
app.post('/playbooks/create', api_1.createPlaybook);
app.get("/playbooks", api_1.getPlaybooks);
app.listen(PORT, function () {
    console.log("The application is listening on port " + PORT + "!");
});