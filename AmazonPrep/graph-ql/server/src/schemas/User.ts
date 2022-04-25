import { objectType } from "nexus";

export const User = objectType({
    name: "User",  
    definition(t) {  
        t.nonNull.int("id"); 
        t.nonNull.string("firstName");
        t.nonNull.string("lastName"); 
        t.nonNull.string("middleName"); 
        t.nonNull.string("email"); 
        t.nonNull.string("city"); 
        t.nonNull.string("state"); 
        // i.e. 123 S Jefferson st
        t.nonNull.string("addressLineOne");
        // i.e. Apt 101  
        t.nonNull.string("addressLineTwo"); 
        t.nonNull.int("zipCode"); 
        t.nullable.int("phoneNumber"); 
    },
});