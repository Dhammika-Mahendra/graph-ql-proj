import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/graphQL/mock/UserData";
import { UserSettings } from "../models/UserSettings";
import { mockUserSettings } from "../mock/UserSettingsData";

@Resolver((of)=> User)
export class UserResolver{

    @Query(() => User,{nullable: true})
    getUserById(@Args('id',{type:()=>Int}) id: Number){
        return mockUsers.find(user => user.id === id);
    }

    @Query(() => [User]) 
    getUsers(){
        return mockUsers;
    }

    @ResolveField(() => UserSettings, { name: 'settings', nullable: true })
    getUserSettings(@Parent() user: User) {
       return mockUserSettings.find((settings) => settings.userId === user.id);
    }

    @Mutation(() => User)
    createUser(@Args('userName') userName: string, @Args('displayName') displayName: string){
        const newUser = {
            id: mockUsers.length + 1,
            userName,
            displayName
        }
        mockUsers.push(newUser);
        return newUser;
    }

}