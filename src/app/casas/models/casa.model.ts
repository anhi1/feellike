export interface ICasa {
    id: number;
    title: string;
    bedrooms: number;
    bathrooms: number;
    squarefeet: number;
    description: string;
    available: boolean,
    country: string;
    city: string;
    cp: string;
    price: number;
    comodidad: string,
    photo: string
    categories: number[];
    userId: number;   
}
