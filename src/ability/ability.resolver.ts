import { Ability } from './models/ability.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { AbilityService } from './ability.service';
// import { String } from '@nestjs/graphql';

@Resolver(of => Ability)
export class AbilityResolver {
  constructor(private abilityService: AbilityService) {}

  @Query(returns => Ability)
  async ability(@Args('name', { type: () => String }) name: string) {
    return this.abilityService.findOneByName(name);
  }
}
