## Módulos Comments

1. Generar módulo y componentes:

ng generate module comments --routing --module app.module
ng generate component comments/comment-form
ng generate interface comments/comment --type=model --prefix=I
ng generate service comments/comment

2. Crear routes para comments
* app-routing.module.ts /comments CommentsModule
* comments-routing.module.ts
 
  * '/:commentId/new' CommentFormComponent
  * '/:id/edit' CommentFormComponent

## Formulario Comments

1. CommentFormComponent

 Comment:
* id
* user?
* description
* photo
* casaId
* userId

 


## Mis comentarios (user)

## Todos los comentarios (admin)


## Tareas

* Terminar controladores y servicios backend con las operaciones CRUD

* Que los modelos de backend y frontend coincidan

* Revisar uno a uno los componentes de angular para que reciban los datos de backend correctanmente

* Revisar enrutados y botones de navbar y la aplicacion para que coincidan