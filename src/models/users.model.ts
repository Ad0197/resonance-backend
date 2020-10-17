import { Field, InputType, ObjectType } from 'type-graphql'
import { Model } from './model'

@InputType('UserInput')
@ObjectType('User')
export default class User implements Model {
  static tableName: string = 'Users';
  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  id: string;

  static mapFromFieldToInstance = (map: any): User => {
    return {
      username: map.username,
      email: map.email,
      lastName: map['Last Name'],
      firstName: map['First Name'],
      password: map.Password,
      id: map.key
    }
  }

  static mapFromInstanceToField = (user: User): any => {
    return {
      'Last Name': user.lastName,
      'First Name': user.firstName,
      Password: user.password,
      username: user.username,
      email: user.email
    }
  }
}
