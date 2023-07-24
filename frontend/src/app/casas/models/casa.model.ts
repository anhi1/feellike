import { ICategory } from "src/app/categories/models/category.model";
import { IUser } from "src/app/users/models/user.model";

export interface ICasa {
    id: number;
    title: string;
    bedrooms: number;
    bathrooms: number;
    squarefeet: number;
    // description: string;
    // available: boolean;
    // country: string;
    // city: string;
    // cp: string;
    // price: number;
    // comodidad: string;
    // photo: string;
    categories?: ICategory[];
    user?: Partial<IUser>; 
    images?: string [];
    
}
