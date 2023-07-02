# Full Stack: Frontend con Angular + Backend con NestJS y TypeORM

## Backend

nest new backend --skip-git --package-manager npm
cd backend
npm install --save @nestjs/typeorm typeorm mysql2

## Frontend

ng new frontend --routing --skip-git --style=css
cd frontend
ng add @angular/material -y --theme=indigo-pink
