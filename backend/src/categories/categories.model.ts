import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true, length: 50})
    name: string;

    @Column({length: 300})
    description: string;

    // nullable true indica opcional
    @Column({nullable: true})
    icono?: string;

}

