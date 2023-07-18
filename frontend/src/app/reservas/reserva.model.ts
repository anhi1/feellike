import { ICasa } from "../casas/models/casa.model";
import { IUser } from "../users/models/user.model";

export interface IReserva {
    id: number;
    user?: Partial<IUser>;
    casa?: Partial<ICasa>;
    price: number;
    startDate: Date;
    endDate: Date;
  }