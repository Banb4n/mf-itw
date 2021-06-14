"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DATABASE_PATH = './server/db.json';
var createPlaybook = function (req, res) {
    var data = req.body;
    console.log({ data: data });
    // try {
    //   const data: Object = fs.readFileSync(DATABASE_PATH, 'utf8')
    //   console.log(data)
    //   res.status(200).send(JSON.stringify(data));
    // } catch (err) {
    //   console.error(err)
    // }
};
exports.default = createPlaybook;
