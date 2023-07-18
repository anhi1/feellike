import { ICasa } from "../casas/models/casa.model";
import { IUser } from "../users/models/user.model";

export interface IComment {
        id: number;
        description: String;
        photo?: String;
        rating: number;
        casa?: Partial<ICasa>;
        user?: Partial<IUser>;
        
      }

