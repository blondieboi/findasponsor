import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Mission } from './Mission';

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ type: 'text', unique: true })
	username: string;

	@Column({ type: 'text', select: false })
	password: string;

	@Column({ type: 'text', select: false })
	salt: string;

	@OneToMany((type) => Mission, (mission) => mission.user)
	missions: Mission[];
}
