import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Ability {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Boolean)
  is_main_series: boolean;
}
