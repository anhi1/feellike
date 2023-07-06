import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  save() {

    let register = {
      username: this.userForm.get('fullName')?.value ?? '',
      email: this.userForm.get('email')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''
    }

    this.authService.register(register).subscribe(data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      localStorage.setItem('jwt_token', data.token);
      this.router.navigate(['/casas']);

    });

  }

}
