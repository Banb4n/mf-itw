import fs from 'fs';
import express from 'express';

const DATABASE_PATH = './server/db.json'

const getPlaybooks = (req: express.Request, res: express.Response): any => {
  try {
    const data: Object = fs.readFileSync(DATABASE_PATH, 'utf8')
    console.log(data)

    res.json({data});
  } catch (err) {
    console.error(err)
}};

export default getPlaybooks;

