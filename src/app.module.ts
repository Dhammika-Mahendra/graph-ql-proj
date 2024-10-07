import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphQL/resolvers/UserResolver';
import { UserSettingsResolver } from './graphQL/resolvers/UserSettingsResolver';
import { TypeOrmModule} from '@nestjs/typeorm';
import { User } from './graphQL/models/User';
import { UserSettings } from './graphQL/models/UserSettings';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql123',
      database: 'employeeDB',
      entities: [User, UserSettings],
      synchronize: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService,UserResolver,UserSettingsResolver],
})
export class AppModule {}
