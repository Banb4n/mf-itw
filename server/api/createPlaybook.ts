import fs from 'fs';
import express from 'express';

import { PlaybookInterface, StepInterface } from '../types/Playbook';

const DATABASE_PATH = './server/db.json'

const generateSteps = (rawSteps: any): Array<StepInterface> => {
  return rawSteps;
};

const createPlaybook = (req: any, res: any): any => {
  const { playbookData } = req.body;

  const playbook: PlaybookInterface = {
    name: playbookData.name,
    createdAt: playbookData.createdAt,
    createdBy: playbookData.createdBy,
    steps: generateSteps(playbookData.content),
  }
  
  try {
    fs.appendFile(DATABASE_PATH, JSON.stringify(playbook), err => {
      if (err) {
        console.error(err)
        return
      }
    })

    res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

export default createPlaybook;

