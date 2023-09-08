import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.model';

@Injectable()
export class UsersService {
    // updatePhoto(user: any) {
    //     throw new Error('Method not implemented.');
    // }

    constructor(
        @InjectRepository(User) 
        private userRepo: Repository<User>,
    ){}

    findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

   

    findById(id: number): Promise<User | null> {
        return this.userRepo.findOne({ 
            where: {
                id: id
            },
         });
    }

    findByEmail(email: string): Promise<User | null> {
        return this.userRepo.findOne({ 
            where: {
                email: email
            },
         });
    }

    async create(user: User): Promise<User> {
        try {
            return await this.userRepo.save(user);
        } catch (error) {
            console.log(error.message);
            throw new ConflictException('Cant save');
        }
    }

    async update(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({ 
            where: {
                id: user.id
            }
         });

         if(!userFromDB) throw new NotFoundException('User no encontrado');

         try {
            console.log(user);
            userFromDB.fullName = user.fullName;
            userFromDB.email = user.email;
            userFromDB.bio = user.bio;
            userFromDB.city = user.city;
            userFromDB.phone = user.phone;
            userFromDB.code = user.code;
            return await this.userRepo.save(userFromDB);

         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando user');
         }
    }

    async updateAvatar(user: User): Promise<User> {
        let userFromDB = await this.userRepo.findOne({ 
            where: {
                id: user.id
            }
         });
         if(!userFromDB) throw new NotFoundException('User no encontrado');

         try {
            userFromDB.photo = user.photo;
            return await this.userRepo.save(userFromDB);
         } catch (error) {
            console.log(error);
            throw new ConflictException('Error actualizando user');
         }
    }

}



