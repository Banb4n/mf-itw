import express from 'express';
import { getPlaybooks, createPlaybook } from './api';

const app = express();
const PORT = 3001;

app.post('/playbooks/create', createPlaybook);
app.get("/playbooks", getPlaybooks);

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
})
