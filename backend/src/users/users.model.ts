
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "./user-role.enum";


        
@Entity()
export class User {

   
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullName: string;

    @Column()
    email: string;

    @Column()
    bio: string;

    @Column()
    phone: string;

    @Column()
    idioma: string;

    @Column()
    code: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    photo: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;

    @Column()
    password: string;




}

