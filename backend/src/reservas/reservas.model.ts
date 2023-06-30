import { Casa } from "src/casas/casas.model";
import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reserva {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user'})
    user: User;

    @ManyToOne(() => Casa)
    @JoinColumn({ name: 'id_casa'})
    casa: Casa;

    @Column({default: 5})
    price: number;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

}

