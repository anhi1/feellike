### PROYECTO 3_angular: Alquiler  vacacional: feellike App

[![logo.png](https://i.postimg.cc/pTdMLHSY/logo.png)](https://postimg.cc/nsNP36pC)

## Proyecto Final "Curso Desarrollo Web Frontend con Angular, impartido por:

  * La Fundación Adecco y financiado por el Ayuntamiento de Madrid
    [![Edigital-Adecco.jpg](https://i.postimg.cc/kgzTbczV/Edigital-Adecco.jpg)](https://postimg.cc/YvNNc1pk)

## Tecnologías utilizadas

  * Angular Cli
  * Angular Material
  * JSON Server NodeJS



# Full Stack: Frontend con Angular + Backend con NestJS y TypeORM

## Backend

nest new backend --skip-git --package-manager npm
cd backend
npm install --save @nestjs/typeorm typeorm mysql2

## Frontend

ng new frontend --routing --skip-git --style=css
cd frontend
ng add @angular/material -y --theme=indigo-pink


## Tareas

* Detalle casa 
* Botón Reservar en detalle casa
* Botón Agregar comentario en detalle casa
* Formulario comentario se llega desde el botón Agregar comentario en detalle casa
* Rellenar el fomulario comentario y comprobar que se genera un nuevo comentario en base de datos
* Entrar en detalle casa y comprobar que aparece una lista de comentarios

en routerlink de botones:

Botón Agregar comentario:
localhost:4200/comments/casaId/new

Botón Reservar casa
localhost:4200/reservas/casaId/new

Botón editar comentario
localhost:4200/comments/id/edit

Botón editar reserva en el listado Reservas
localhost:4200/reservas/id/edit

En el botón de agregar casa hay que poner ngIf="isAdmin"
