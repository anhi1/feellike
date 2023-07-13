import { ICasa } from "../casas/models/casa.model";

export interface IReserva {
    id: number;
    user?: any;
    casa?: Partial<ICasa>;
    price: number;
    startDate: Date;
    finishDate: Date;
  }