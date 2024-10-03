import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphQL/resolvers/UserResolver';
import { UserSettingsResolver } from './graphQL/resolvers/UserSettingsResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: 'src/schema.gql',
  })
  ],
  controllers: [AppController],
  providers: [AppService,UserResolver,UserSettingsResolver],
})
export class AppModule {}
