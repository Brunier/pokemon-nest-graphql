import { Controller, Get, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Controller('pokemon')
export class PokemonController {
  constructor(private httpService: HttpService) {}

  @Get()
  getPokemon(): Observable<AxiosResponse<any>> {
    this.httpService
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(map(response => response.data));

    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(map(response => response.data));
  }
}
