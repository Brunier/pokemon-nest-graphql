import { Module, HttpModule } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';
import { AbilityService } from '../ability/ability.service';

@Module({
  imports: [HttpModule],
  providers: [PokemonService, AbilityService, PokemonResolver],
})
export class PokemonModule {}