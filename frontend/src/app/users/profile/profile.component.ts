import { Component } from '@angular/core';
import { IUser } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: IUser | undefined;

  userForm = new FormGroup({
    id: new FormControl<number>(0),
    fullName: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.findCurrentUser()
                    .subscribe(data => {
                      this.user = data;
                      this.userForm.reset({
                        id: this.user.id,
                        fullName: this.user.fullName,
                        email: this.user.email
                      });
                    });
  }

  save(): void {
    let id = this.userForm.get('id')?.value ?? 0;
    let fullName = this.userForm.get('fullName')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';

    let user: IUser = {
      id: id,
      fullName: fullName,
      email: email
    }

    this.userService.update(user)
    .subscribe(data => console.log('usuario actualizado'));

  }
}
