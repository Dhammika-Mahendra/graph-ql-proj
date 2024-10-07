import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { User } from "../models/User";
import { mockUsers } from "src/graphQL/mock/UserData";
import { UserSettings } from "../models/UserSettings";
import { mockUserSettings } from "../mock/UserSettingsData";
import { CreateUserInput } from "../utils/CreateUserInput";
import { Inject } from "@nestjs/common";
import { UserService } from "src/Services/UserService";

@Resolver((of)=> User)
export class UserResolver{

    constructor(@Inject(UserService) private userService: UserService){}

    @Query(() => User,{nullable: true})
    getUserById(@Args('id',{type:()=>Int}) id: Number){
        return mockUsers.find(user => user.id === id);
    }

    @Query(() => [User]) 
    getUsers(){
        return this.userService.getUsers();
    }

    @ResolveField(() => UserSettings, { name: 'settings', nullable: true })
    getUserSettings(@Parent() user: User) {
       return mockUserSettings.find((settings) => settings.userId === user.id);
    }

    @Mutation(() => User)
    createUser(@Args('createUserData') creataUserData : CreateUserInput){
        const {userName, displayName} = creataUserData;
        const newUser = {
            id: mockUsers.length + 1,
            userName,
            displayName
        }
        mockUsers.push(newUser);
        return newUser;
    }

}