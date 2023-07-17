import { ICasa } from "../casas/models/casa.model";

export interface IComment {
        id: number;
        description: String;
        photo?: String;
        rating: number;
        casa?: Partial<ICasa>;
        // casaId: number;
        // userId: number;
        
      }

