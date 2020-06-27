import { Module, HttpModule } from '@nestjs/common';
import { AbilityResolver } from './ability.resolver';
import { AbilityService } from './ability.service';

@Module({
  imports: [HttpModule],
  providers: [AbilityService, AbilityResolver],
})
export class AbilityModule {}