
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-role.enum";
import { Casa } from "src/casas/casas.model";


        
@Entity()
export class User {

   
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    fullName?: string;

    @Column()
    email: string;

    @Column({nullable: true})
    bio?: string;

    @Column({nullable: true})
    phone?: string;

    @Column({nullable: true})
    idioma?: string;

    @Column({nullable: true})
    code?: string;

    @Column({nullable: true})
    city?: string;

    @Column({nullable: true})
    street?: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column({nullable: true})
    photo?: string;

    @Column()
    password: string;

    // @OneToOne(
    //     () => Casa, 
    //     { nullable:true, cascade: true, eager: true }
    //     )
    // @JoinColumn({name: 'id_casa'}) 
    // casa: Casa;



}

