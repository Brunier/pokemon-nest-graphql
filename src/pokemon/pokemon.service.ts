import { Injectable } from '@nestjs/common';
import { Pokemon } from './models/pokemon.model';

@Injectable()
export class PokemonService {
  async findOneById(id: number): Promise<Pokemon> {
    return {
      id,
      name: 'oin',
      order: 30,
      weight: 30,
    } as any;
  }
}
