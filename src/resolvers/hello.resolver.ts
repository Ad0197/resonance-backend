import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql'

@InputType()
class HelloInput {
  @Field()
  title: string;

  @Field()
  klk: string;
}

@InputType()
class NewRecipeInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => [String])
  ingredients: string[];
}

@Resolver()
export default class HelloResolver {
  @Query(() => String)
  hello () {
    return 'hi'
  }

  @Mutation(() => String)
  sayHello (@Arg('options', () => HelloInput) options: HelloInput) {
    return options.title
  }
}
