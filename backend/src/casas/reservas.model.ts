import { Casa } from "src/casas/casas.model";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Casa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({type: 'int'})
    bedrooms:  number;

    @Column({type: 'int'})
    bathrooms: number;

    @Column({type: 'int'})
    squarefeet:  number;
    
    @Column()
    description:  string;

    @Column({type: 'boolean', default: false})
    available: boolean;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    cp: string;

    @Column({type: 'decimal', precision: 10, scale: 2})
    price: number;

    @Column()
    comodidad: string;

    @PrimaryGeneratedColumn()
    userId: number;



    @CreateDateColumn({name: 'created_date'})
    createdDate: Date;

    // @Column({type: 'int'})
    // quantity: number;

    // @Column({type: 'boolean', default: false})
    // available: boolean;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId'})
    user: User;

    // @ManyToOne(() => Editorial)
    // @JoinColumn({ name: 'id_editorial'})
    // editorial: Editorial;

    @ManyToMany(() => Category, {cascade: true})
    @JoinTable({
        name: 'casa_category', 
        joinColumn: {name: 'id_casa'},
        inverseJoinColumn: {name: 'id_category'}
    })
    categories: Category[];
}

function Column(): (target: Casa, propertyKey: "bedrooms") => void {
    throw new Error("Function not implemented.");
}
function Entity(): (target: typeof Casa) => void | typeof Casa {
    throw new Error("Function not implemented.");
}

function PrimaryGeneratedColumn(): (target: Casa, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}

function CreateDateColumn(arg0: { name: string; }): (target: Casa, propertyKey: "createdDate") => void {
    throw new Error("Function not implemented.");
}

function ManyToOne(arg0: () => any): (target: Casa, propertyKey: "author") => void {
    throw new Error("Function not implemented.");
}

function JoinColumn(arg0: { name: string; }): (target: Casa, propertyKey: "user") => void {
    throw new Error("Function not implemented.");
}

function ManyToMany(arg0: () => any, arg1: { cascade: boolean; }): (target: Casa, propertyKey: "categories") => void {
    throw new Error("Function not implemented.");
}

function JoinTable(arg0: { name: string; joinColumn: { name: string; }; inverseJoinColumn: { name: string; }; }): (target: Casa, propertyKey: "categories") => void {
    throw new Error("Function not implemented.");
}

