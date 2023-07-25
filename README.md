### PROYECTO 3_angular: Alquiler  vacacional: feellike App

[![logo.png](https://i.postimg.cc/MTv9qFGd/logo.png)](https://postimg.cc/XG6fgxdC)

## Proyecto Final "Curso Desarrollo Web Frontend con Angular, impartido por:
  * La Fundación Adecco y financiado por el Ayuntamiento de Madrid

## Temática: 
* Nuestra aplicación simula una app de alquiler vacacional.  El nombre, rememora un lugar tranquilo, un lugar donde sentirse bien.

## Objetivos:
  * Diseñar una aplicación con la tecnología de Angular CLI, poniendo en práctica los conceptos aprendidos durante el curso.
  * Generar y conectar el Backend con el Frontend.
  * Ejecutar la aplicación y poder evidenciar que un “supuesto” usuario puede interactuar de manera intuitiva con ella.

## Equipo de Trabajo:

Anhie Molina: Diseñadora Gráfica. https://www.linkedin.com/in/annie-m-0a69b016a
Daisy Delgado: Informática. http://www.linkedin.com/in/daysidelgadodiaz
Claudia Muñoz: Administrativa. https://www.linkedin.com/in/cmunoz-9b58

## Diseño en Figma
<a target="blanck" rel="noopener noreferrer" href="https://www.figma.com/file/R82BxrgeLRFYb4ZeHAiyeq/plantilla?node-id=0%3A1&mode=dev">
[![Img-Figma1.png](https://i.postimg.cc/WbTQ8hbW/Img-Figma1.png)](https://postimg.cc/jC3gdqfP)</a>

## Tecnologías utilizadas

  # NodeJS

  https://nodejs.org/es
  Node.js es un entorno de tiempo de ejecución de JavaScript, incluye todo lo que se necesita para ejecutar un programa escrito en JavaScript del lado del servidor. Y para instalar Angular Cli, debemos tener instalado este entorno.

  # Editor de Código Fuente Visual Studio Code
  De este editor hemos aprovechado varias extensiones para optimiar el uso de lenguajes de programación y diversos comandos que han facilitado la estructuración del código y el funcionamiento de la aplicación.
  
  https://code.visualstudio.com/


  # Angular CLI
  https://angular.io/

  * Comandos de Instalación

    * Opción1: npm install -g @angular/cli
    * Opción2: npm install --save-dev @angular/cli

  * Comando de Ejecución:

    * ng serve


  # Angular Material
  https://material.angular.io/
  En este proyecto sólo se ha instalado esta Biblioteca desde la cual hemos importado módulos, componentes y estilos.

  * Comandos de Instalación

    * ng add @angular/material
    * ng add @angular/material -y --theme=indigo-pink --typography=true --animations=true
    Con este comando elegimos tema y tipografía.
 
  # JSON Server NodeJS
  Json server es una API REST NodeJS para entornos de desarrollo y pruebas. 

  * Comando de Instalación

    * npm install -g json-server
    Una vez instalado creamos un fichero db.json 
    
    * Comando de ejecución:
      * json-server --watch db.json

  # Json Placeholder
  https://jsonplaceholder.typicode.com/
  Principalmente se utiliza para crear prototipos y probarlos. Además proporciona una API REST falsa, que proporciona un servicio en línea al que se puede acceder desde cualquier lugar y en cualquier momento.

  # Postman
  https://www.postman.com/
  Esta herramienta es muy útil para programar porque da la posibilidad de hacer pruebas y comprobar el correcto funcionamiento de los proyectos que realizan los desarrolladores web.

  # Mockaroo
  https://www.mockaroo.com/
  Es una aplicación que permite generar, de forma automática, grandes conjuntos de datos de prueba a partir de una serie de definiciones de campos y el tipo de dato correspondiente.


  # Base de datos: MySQL

  Windows MYSQL Installer:
 https://dev.mysql.com/downloads/installer/

  Elegir instalación completa.

  # GUI 
  La Interfaz gráfica de usuario, conocida también como GUI (Graphical user interface) crea un entorno en el que una máquina y un usuario interactúan.

  * MySQL Workbench
  https://dbeaver.io/download/

# NestJS

https://nestjs.com/
Framework para desarrollo de aplicaciones web backend que se ejecuta sobre la plataforma NodeJS. Nest se focaliza en la arquitectura de las aplicaciones y está pensado para crear servicios web o API REST.

* Comando de Instalación
* npm i -g @nestjs/cli

* Comando para crear un proyecto
* nest new project-name  

# TypeORM
(Object Relation Mapping), que permite mapear los objetos que creemos con NestJS y que se refleje en la base de datos.

* Comando de Instalación
* npm install --save @nestjs/typeorm typeorm mysql2

# Git
https://git-scm.com/
Software de control de versiones (Repositorio).

# GitHub
https://github.com/
Github es una plataforma creada para alojar el código de las aplicaciones de cualquier desarrollador web.

# Compodoc
https://compodoc.app/
Es una herramienta de código abierto que facilita la generación de documentación para un proyecto Angular.

* Comando de Instalación
* npm install -g @compodoc/compodoc

# Swagger
https://swagger.io/
Swagger es otra herramientas que nos ayuda a documentar nuestras APIs.

* Comando de Instalación
* npm install @nestjs/swagger

## Backend

nest new backend --skip-git --package-manager npm
cd backend
npm install --save @nestjs/typeorm typeorm mysql2

## Frontend

ng new frontend --routing --skip-git --style=css
cd frontend
ng add @angular/material -y --theme=indigo-pink




