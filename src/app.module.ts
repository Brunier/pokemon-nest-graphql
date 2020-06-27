import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    PokemonModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
