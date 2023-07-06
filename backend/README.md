# Nest con TypeORM

nest new casas --skip-git --package-manager npm

cd casas

npm install --save @nestjs/typeorm typeorm mysql2

Módulo base de datos:

* nest generate module database
* Añadir la configuración MySQL
* Crear base de datos backend_nest desde MySQL Workbench

Módulo Books:
* nest generate module casas
* nest generate controller casas
* nest generate service casas

Pasos manuales: 

* Crear casas.model.ts o casas.entity.ts

* Dentro de casas.model.ts añadir las columnas necesarias con anotaciones/decoradores: @Entity, @Column

* casas.module.ts agregar:
imports: [TypeOrmModule.forFeature([Casas])],

* casas.service.ts