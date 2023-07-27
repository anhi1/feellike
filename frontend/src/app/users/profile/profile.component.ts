import { Component } from '@angular/core';
import { IUser } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

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
    bio: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  });

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.findCurrentUser()
                    .subscribe(data => {
                      this.user = data;
                      this.userForm.reset({
                        id: this.user.id,
                        fullName: this.user.fullName,
                        bio: this.user.bio,
                        email: this.user.email
                      });
                    });
  }

  save(): void {
    let id = this.userForm.get('id')?.value ?? 0;
    let fullName = this.userForm.get('fullName')?.value ?? '';
    let bio = this.userForm.get('bio')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';

    let user: IUser = {
      id: id,
      fullName: fullName,
      bio: bio,
      email: email
    }

    this.userService.update(user)
    .subscribe(data => {console.log('usuario actualizado');
this.router.navigate(['/users', user.id]);
  });

  }
}
