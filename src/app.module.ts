import { Module, HttpModule } from '@nestjs/common';
import { PokemonController } from './features/pokemon.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [AppService],
})
export class AppModule {}
