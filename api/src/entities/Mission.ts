import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Mission extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column('text')
	missionName: string;

	@Column('text')
	missionDescription: string;

	@Column('text', { array: true, nullable: true })
	sponsors: string[];

	@ManyToOne((type) => User, (user) => user.missions)
	user: User;
}
