import { Field, Int, ObjectType } from '@nestjs/graphql';

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
}
