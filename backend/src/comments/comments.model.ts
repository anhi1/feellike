import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user'})
    user: User;
}
