import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva-casa',
  templateUrl: './reserva-casa.component.html',
  styleUrls: ['./reserva-casa.component.css']
})
export class ReservaCasaComponent {
  form: FormGroup | undefined;

  constructor() {
    this.buildForm();  //aqui cargamos el metodo
  }

  ngOnInit(): void {   // se carga cuando hacen peticion de datos, renderizar algo espera de terceros
   
  }

  private buildForm(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      startate: new FormControl('', [Validators.required]),
      ate: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      text: new FormControl('', [Validators.maxLength(80)]),
      category: new FormControl('', [Validators.required]),
    });
   
  }

  save(event: Event) {
    event.preventDefault();  //previene que haga recarga
    if (this.form.valid) {
      const value = this.form.value;  // carga los valores
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    } 
  }

  get emailField() {
    return this.form.get('email')
  }

  

}

