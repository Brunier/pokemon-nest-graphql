import { Pokemon } from './models/pokemon.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { Int } from '@nestjs/graphql';

@Resolver(of => Pokemon)
export class PokemonResolver {
  constructor(private pokemonService: PokemonService) {}

  @Query(returns => Pokemon)
  async pokemon(@Args('id', { type: () => Int }) id: number) {
    return this.pokemonService.findOneById(id);
  }
}
