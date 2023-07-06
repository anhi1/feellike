import { Casa } from "src/casas/casas.model";
import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    description: string;

    @Column()
    photo: string;

    @Column()
    casaId: number;

  
 
    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user'})
    user: User;
    userId: number;  //

}

