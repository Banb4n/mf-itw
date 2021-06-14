"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var DATABASE_PATH = './server/db.json';
var generateSteps = function (rawSteps) {
    return rawSteps;
};
var createPlaybook = function (req, res) {
    var playbookData = req.body.playbookData;
    var playbook = {
        name: playbookData.name,
        createdAt: playbookData.createdAt,
        createdBy: playbookData.createdBy,
        steps: generateSteps(playbookData.content),
    };
    try {
        fs_1.default.appendFile(DATABASE_PATH, JSON.stringify(playbook), function (err) {
            if (err) {
                console.error(err);
                return;
            }
        });
        res.status(200);
    }
    catch (err) {
        console.error(err);
    }
    res.status(200);
};
exports.default = createPlaybook;
