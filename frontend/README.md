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