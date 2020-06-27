import { Pokemon } from './models/pokemon.model';
import { Ability } from '../ability/models/ability.model';
import { Args, Query, Resolver, ResolveField } from '@nestjs/graphql';
import { PokemonService } from './pokemon.service';
import { AbilityService } from '../ability/ability.service';
import { Int, Parent } from '@nestjs/graphql';

@Resolver(of => Pokemon)
export class PokemonResolver {
  constructor(private pokemonService: PokemonService, private abilityService: AbilityService) {}

  @Query(returns => Pokemon)
  async pokemon(@Args('id', { type: () => Int }) id: number) {
    return this.pokemonService.findOneById(id);
  }

  @ResolveField('abilities', returns => [Ability])
  async ability(@Parent() pokemon: Pokemon) {
    const { abilities } = pokemon;
    return abilities.map(({ name }) => this.abilityService.findOneByName(name))
  }
}
