export enum UserRole {
    USER = 'user',
    ADMIN = 'admin'
  }

export interface IUser {
    id: number;
    fullName: string;
    email: string;
    bio?: string;
    phone?: number; 
    idioma?: string;
    code?: number;
    city?: string,
    street?: string,
    photo?: string;  //Avatar Imagenes
    password?: string; 
    // role?: UserRole;
    
}
