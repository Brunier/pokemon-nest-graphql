import { Module, HttpModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { AbilityModule } from 'src/ability/ability.module';
import { join } from 'path';

@Module({
  imports: [
    HttpModule,
    PokemonModule,
    AbilityModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
