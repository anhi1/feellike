import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from 'src/casas/casas.module';
import { Category } from 'src/categories/categories.model';
import { Comment } from 'src/Comment/comment.model';
import { Reserva } from 'src/reserva/reserva.model';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'admin', // sustituir por variable de entorno
            // password: process.env.NEST_PASSWORD,
            database: 'backend_nest',
            entities: [
                // __dirname + 'src/**/*.model.ts'
                Casa, Category, reserva, User, Comment
            ],
            synchronize: true, // generar tablas automáticamente en base a entidades
            logging: true
        })
    ]
})













export class DatabaseModule {}
