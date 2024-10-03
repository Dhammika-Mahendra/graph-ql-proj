import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserSettingsInput } from "../utils/CreateUserSettingsInput";
import { UserSettings } from "../models/UserSettings";
import { mockUserSettings } from "../mock/UserSettingsData";

@Resolver()
export class UserSettingsResolver{
    @Mutation(() => UserSettings)
    createUserSettings(@Args('createUserSettingsData') createUserSettingsData: CreateUserSettingsInput){
        mockUserSettings.push(createUserSettingsData);
        return createUserSettingsData;
    }
}