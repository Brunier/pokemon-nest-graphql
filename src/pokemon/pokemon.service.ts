import { Injectable, HttpService } from '@nestjs/common';
import { Pokemon } from './models/pokemon.model';
import API_ENDPOINTS from '../api.endpoints';

@Injectable()
export class PokemonService {
  constructor(private httpService: HttpService) {}

  async findOneById(id: number): Promise<Pokemon> {
    return this.httpService
      .get(`${API_ENDPOINTS.POKEMON}${id}`)
      .toPromise()
      .then(({ data: { id, name, order, weight } }) => {
        return {
          id,
          name,
          order,
          weight,
        } as Pokemon;
      });
  }
}
