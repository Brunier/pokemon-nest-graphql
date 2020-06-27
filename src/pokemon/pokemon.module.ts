import { Module, HttpModule } from '@nestjs/common';
import { PokemonResolver } from './pokemon.resolver';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [HttpModule],
  providers: [PokemonService, PokemonResolver],
})
export class PokemonModule {}