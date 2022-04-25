import { objectType } from "nexus";

export const Post = objectType({
    name: "Post",  
    definition(t) {  
        t.nonNull.int("id"); 
        t.nonNull.int("userId");
        t.nonNull.string("body");
        // in miliseconds 21312345542 
        t.nonNull.int("timestamp"); 
    },
});