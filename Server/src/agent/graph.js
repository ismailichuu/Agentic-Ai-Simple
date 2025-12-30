import { StateGraph, START, END } from "@langchain/langgraph";
import { clarify } from "./nodes/clarify.js";
import { createJob } from "./nodes/createJob.js";
import { reviseJob } from "./nodes/reviseJob.js";
import { suggestBudget } from "./nodes/suggestBudget.js";
import { agentSchema } from "./stateSchema.js";

const graph = new StateGraph(agentSchema);

graph.addNode('clarify', clarify);
graph.addNode('createJob', createJob);
graph.addNode('reviseJob', reviseJob);
graph.addNode('suggestBudget', suggestBudget);

graph.addEdge(START, 'clarify')
    .addEdge('clarify', 'createJob')
    .addEdge('createJob', 'suggestBudget')

graph.addConditionalEdges(
    "suggestBudget",
    (state) => (state.status === 'accepted' ? END : 'reviseJob'),

    {
        reviseJob: 'reviseJob',
        [END]: END
    }
)

graph.addEdge('reviseJob', 'createJob');

export const agent = graph.compile();


