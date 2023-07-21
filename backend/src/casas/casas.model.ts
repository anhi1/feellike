/* eslint-disable prettier/prettier */
import { Category } from "src/categories/categories.model";
import { User } from "src/users/users.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable,  ManyToMany,  ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Casa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'int'})
    bedrooms:  number;

    // @Column({type: 'int'})
    // bathrooms: number;

    // @Column({type: 'int'})
    // squarefeet:  number;
    
    // @Column()
    // description:  string;

    // @Column({type: 'boolean', default: false})
    // available: boolean;

    // @Column()
    // country: string;

    // @Column()
    // city: string;

    // @Column()
    // cp: string;

    // @Column({type: 'decimal', precision: 10, scale: 2})
    // price: number;

    // @Column()
    // comodidad: string;

    //  @Column()
    // photo: string;

    // @Column("simple-array")
    // images:string[];

   
    @OneToOne(() => User)
    @JoinColumn({ name: 'id_user'})
    user: User;

    
    @ManyToMany(() => Category, {cascade: true})
    @JoinTable({
        name: 'casa_category',
        joinColumn: {name: 'id_casa'},
        inverseJoinColumn: {name: 'id_category'}
    })
    categories: Category[];

    
}


