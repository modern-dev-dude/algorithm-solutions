import { makeSchema } from "nexus";
import { join } from 'path';
import * as types from "./schemas";  

export const schema = makeSchema({
    types:types,
    outputs:{
        schema: join(process.cwd(), "schema.graphql"),
        typegen: join(process.cwd(), "nexus-typegen.ts")
    }
})