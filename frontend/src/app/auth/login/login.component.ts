import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm = new FormGroup({
    email: new FormControl('',[Validators.required]),
    password: new FormControl('', [Validators.required]),
    
  });


  constructor(private authService: AuthService, // utilizando el servicio de auth service podemos probar mas cosas
              private router: Router
  ){}

  save(){ //cogería los datos del userForm // extrae los datos y los guarda en el backend
    
    let login = {
    email : this.userForm.get('email')?.value ?? '', // en caso de q no exista lo ponemos vacio ''
    password : this.userForm.get('password')?.value ?? ''
    
  }
  this.authService.login(login).subscribe(data =>{
    console.log(data.token);
    this.authService.handleLoginResponse(data.token); //guardar el token para utilizarlo en las posteriores peticiones
  this.router.navigate(['/casas']); //te redirige a books lista
  });


}

}
