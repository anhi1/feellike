
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
}
        
@Entity()
export class User {

   
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isOwner: boolean;  //columna que indicar si es propietario en html optionbutton

    @Column({unique: true})
    fullName: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    bio: string;

    @Column({unique: true})
    phone: string;

    @Column({unique: true})
    idioma: string;

    @Column({unique: true})
    code: string;

    @Column({unique: true})
    city: string;

    @Column({unique: true})
    street: string;

    @Column({unique: true})
    photo: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER
    })
    role: UserRole;
    password: string;




}

