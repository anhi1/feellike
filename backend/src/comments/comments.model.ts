import { Casa } from "src/casas/casas.model";
import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    rating: number;

    @Column()
    photo?: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user'})
    user: User;

    @ManyToOne(() => Casa)
    @JoinColumn({ name: 'id_casa'})
    casa: Casa;

  
}

