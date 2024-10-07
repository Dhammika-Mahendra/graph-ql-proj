import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserSettings } from './UserSettings';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

@Entity({name: 'User'})
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  userName: string;

  @Column()
  @Field({ nullable: true })
  displayName?: string;

  @OneToOne(() => UserSettings, { eager: true, cascade: true })
  @JoinColumn()
  @Field({ nullable: true })
  settings?: UserSettings;
}