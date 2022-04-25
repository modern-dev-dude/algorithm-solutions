import { extendType, objectType,nonNull, stringArg , intArg} from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name: "Link", 
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description"); 
        t.nonNull.string("url"); 
    },
});

let links: NexusGenObjects["Link"][]= [   // 1
    {
        id: 1,
        url: "www.howtographql.com",
        description: "Fullstack tutorial for GraphQL",
    },
    {
        id: 2,
        url: "graphql.org",
        description: "GraphQL official website",
    },
];

export const LinkQuery = extendType({  
    type: "Query",
    definition(t) {
        t.nonNull.list.nonNull.field("feed", {
            type: "Link",
            resolve(parent, args, context, info) {
                return links;
            },
        });
    },
});

export const LinkMutation = extendType({
    type:"Mutation",
    definition(t) {
        t.nonNull.field("post", {
            type:"Link",
            args:{
                description: nonNull(stringArg()),
                url: nonNull(stringArg())
            },

            resolve(parent, args, context) {
                const {description, url} = args;
                // increase ID by 1
                let idCount = links.length + 1;
                // set new link data
                const linkToAdd = {
                    id: idCount,
                    description,
                    url
                }
                // add new link to data source 
                links.push(linkToAdd);
                return linkToAdd;             
            }
        }),
        t.nonNull.field("updateLink", {
            type:"Link",
            args:{
                description: stringArg(),
                url: stringArg(),
                id: nonNull(intArg())
            },
    
            resolve(parent, args, context) {
                const {description, url, id} = args;
                const informationToUpdate = {description, url, id};
                // return if no change is made
                if(description?.length !== null && url?.length !== null ) return informationToUpdate;
                links[id] = informationToUpdate;
                // add new link to data source 
                return informationToUpdate;             
            }
            }),

        t.nonNull.field("deleteLink", {
            type:"Link",
            args:{
                id: nonNull(intArg())
            },

            resolve(parent, args, context) {
                const {id} = args;
                const idxOfLinkToDelete = links.findIndex(link => link.id === id)
                links.splice(idxOfLinkToDelete,0);
                // add new link to data source 
                return links;             
            }
        })
    },
})
