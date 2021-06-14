import express from 'express';
import { getPlaybooks, createPlaybook } from './api';

const app = express();
const PORT = 3002;

app.post('/playbooks/create', (req, res) => createPlaybook(req, res));
app.get("/playbooks", getPlaybooks);

app.listen(PORT, () => {
    console.log(`The application is listening on port ${PORT}!`);
})
