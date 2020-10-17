import { Field, ObjectType } from 'type-graphql'
import User from '../../models/users.model'

@ObjectType()
export class LoginResponse {
    @Field()
    accessToken: string;

    @Field(type => User)
    user: User;
}

@ObjectType()
export class isStoredType {
    @Field()
    email: boolean;

    @Field()
    username: boolean;
}
