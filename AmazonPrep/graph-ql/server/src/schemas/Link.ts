import { extendType, objectType, nonNull, stringArg , intArg, list} from "nexus";
import { NexusGenObjects } from "../../nexus-typegen";

export const Link = objectType({
    name: "Link", 
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("description"); 
        t.nonNull.string("url"); 
    },
    nonNullDefaults:{
        input:true,
    }
});

let links: NexusGenObjects["Link"][]= [   
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
            type:list("Link"),
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
                return links;             
            }
        }),
        t.nonNull.field("updateLink", {
            type:list("Link"),
            args:{
                description: nonNull(stringArg()),
                url: nonNull(stringArg()),
                id: nonNull(intArg())
            },
    
            resolve(parent, args, context) {
                const {description,id,url} = args;
                const idxOfLinkToModify = findItemInArrayById(links,args.id);
                // update datasource in place 
                links[idxOfLinkToModify] = {
                    description,id,url
                }
                return links;             
            }
        }),
        t.nonNull.field("deleteLink", {
            type:list("Link"),
            args:{
                id: nonNull(intArg())
            },
            resolve(parent, args, context) {
                const idxOfLinkToModify = findItemInArrayById(links,args.id);
                // remove 1 item ad found index 
                links.splice(idxOfLinkToModify,1);
                return links;             
            }
        })
    },
})

function findItemInArrayById(arrayOfItemsToSearch:Array<any>, id:number){
    const idxOfLinkToUpdate = links.findIndex(link => link.id === id)
    if(idxOfLinkToUpdate === -1) {
        throw new Error(`Item with id ${id} cannont be found!`)
    }
    return idxOfLinkToUpdate
}

/**
 * usage
 *  query {
        feed {
            id
            url
            description
        }
    }
    mutation {
        post(url: "www.prisma.io", description: "Next-generation Node.js and TypeScript ORM") {
            id,description,url
        }
    }

    mutation {
        updateLink (url: "www.google.com", description: "Google search engine", id:2) {
            id,description,url
        }
    }

    mutation {
        deleteLink(id: 2) {
            id,description,url
        }
    }
 */