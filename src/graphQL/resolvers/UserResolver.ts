import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/mockData";

@Resolver()
export class UserResolver{

    @Query(() => User,{nullable: true})
    getUserById(@Args('id',{type:()=>Int}) id: Number){
        return mockUsers.find(user => user.id === id);
    }

    @Query(() => [User]) 
    getUsers(){
        return mockUsers;
    }

}