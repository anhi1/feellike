import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from 'src/casas/casas.model';
import { Category } from 'src/categories/categories.model';
import { Reserva } from 'src/reservas/reservas.model';
import { User } from 'src/users/users.model';
import { Comment } from 'src/comments/comments.model';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            // password: 'admin', // sustituir por variable de entorno
            password: 'admin',
            database: 'backend_nest_casas',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                Casa, Category, Reserva, User, Comment
            ],
            synchronize: true, // generar tablas automáticamente en base a entidades
            logging: true
        })
    ]
})













export class DatabaseModule {}
