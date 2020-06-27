import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Ability } from '../../ability/models/ability.model';
@ObjectType()
export class Pokemon {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  order: number;

  @Field(type => Int)
  weight: number;

  @Field(type => [Ability])
  abilities: Ability[]
}
