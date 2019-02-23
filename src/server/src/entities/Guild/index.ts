import { Field, ID, ObjectType } from 'type-graphql'
import CategoryChannel from '@entities/CategoryChannel'
import Channel from '@entities/Channel'
import TextChannel from '@entities/TextChannel'
import { Snowflake } from '@utils/scalars'
import Theme from '@entities/Theme'
import { GuildBan } from '@entities/Guild/GuildBans'
import GuildMember from '@entities/GuildMember'
import { GuestMember } from '@entities/GuestMember'

@ObjectType()
export default class Guild {
  @Field() createdAt: Date
  @Field() available: boolean
  @Field() afkTimeout: number

  @Field() icon: string
  @Field() iconURL: string
  @Field() joinedAt: Date

  @Field() large: boolean
  @Field() memberCount: number
  @Field() verificationLevel: number

  @Field() name: string
  @Field() nameAcronym: string

  @Field(type => Snowflake)
  id: string

  @Field(type => Channel)
  channels: (TextChannel | CategoryChannel)[]

  @Field(type => GuildMember)
  members: (GuildMember)[]

  @Field(type => Theme)
  theme: Theme

  @Field(type => Snowflake)
  ownerID: string

  @Field(type => ID)
  region: string

  @Field(type => [GuestMember])
  guests: GuestMember[]

  @Field(type => GuestMember, { nullable: true })
  me?: GuestMember

  @Field(type => [GuildBan])
  bans: GuildBan[]
}

export * from './args'
export * from './GuildBans'
