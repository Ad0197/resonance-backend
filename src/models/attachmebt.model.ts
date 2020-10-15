import Airtable from 'airtable'
import { Field, ObjectType } from 'type-graphql'

/**
 * @class
 * This is only for type-grapql integration
 */
@ObjectType()
class Thumbnail implements Airtable.Thumbnail {
    @Field()
    url: string;

    @Field()
    width: number;

    @Field()
    height: number;
}

@ObjectType()
class Thumbnails {
    @Field(type => Thumbnail)
    small: Thumbnail;

    @Field(type => Thumbnail)
    large: Thumbnail;

    @Field(type => Thumbnail)
    full: Thumbnail;
}

@ObjectType()
export default class Attachment implements Airtable.Attachment {
    @Field()
    id: string;

    @Field({ nullable: true })
    url: string;

    @Field()
    filename: string;

    @Field()
    size: number;

    @Field()
    type: string;

    @Field(type => Thumbnails)
    thumbnails?: Thumbnails;
}
