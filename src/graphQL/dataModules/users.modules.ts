import { Module } from "@nestjs/common";
import { UserResolver } from "../resolvers/UserResolver";
import { UserService } from "src/Services/UserService";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../models/User";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserResolver, UserService]
})
export class UsersModule {}
