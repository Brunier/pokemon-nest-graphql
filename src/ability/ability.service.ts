import { Injectable, HttpService } from '@nestjs/common';
import { Ability } from './models/ability.model';
import API_ENDPOINTS from '../api.endpoints';

@Injectable()
export class AbilityService {
  constructor(private httpService: HttpService) {}

  async findOneById(id: number): Promise<Ability> {
    return this.httpService
      .get(`${API_ENDPOINTS.ABILITY}${id}`)
      .toPromise()
      .then(({ data: { id, name, is_main_series } }) => {
        return {
          id,
          name,
          is_main_series,
        } as Ability;
      });
  }

  async findOneByName(name: string): Promise<Ability> {
    return this.httpService
      .get(`${API_ENDPOINTS.ABILITY}${name}`)
      .toPromise()
      .then(({ data: { id, name, is_main_series } }) => {
        return {
          id,
          name,
          is_main_series,
        } as Ability;
      });
  }
}
