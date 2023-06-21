import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Permission {

    @PrimaryGeneratedColumn()
    id_permission: number;

    @Column({ length: 50 })
    name: string;

    @Column({ length: 255 })
    description: string;

    @Column({default: true })
    is_active: boolean;
    
}