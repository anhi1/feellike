export interface ICasa {
    id: number;
    title: string;
    categories: number[];
    bedrooms: number;
    bathrooms: number;
    squarefeet: number;
    description: string;
    userId: number;
    available: boolean,
    country: string;
    city: string;
    cp: string,  //?? number
    price: number;
    comodidad: string,
    photo: [{}, {}, {}, {}] //?
}
