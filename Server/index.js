import express from 'express';
import { intialState } from './src/agent/state.js';
import { agent } from './src/agent/graph.js';

const port = '8080';
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/run-agent', async (req, res) => {
    const state = {
        ...intialState,
        userInput: req.body.input
    };

    const result = await agent.invoke(state);

    res.json(result);
})

app.listen(port, () => console.log('server running'));
