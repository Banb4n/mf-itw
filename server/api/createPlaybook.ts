import fs from 'fs';
import express from 'express';

const DATABASE_PATH = './server/db.json'

const createPlaybook = (req: express.Request, res: express.Response): any => {
  const data = req.body;
  console.log({ data });
  // try {
  //   const data: Object = fs.readFileSync(DATABASE_PATH, 'utf8')
  //   console.log(data)

  //   res.status(200).send(JSON.stringify(data));
  // } catch (err) {
  //   console.error(err)
  // }
};

export default createPlaybook;

