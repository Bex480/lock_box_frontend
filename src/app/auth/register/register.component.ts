import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ApiConfig} from '../../config/api.config';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
    selector: 'app-register',
    imports: [RouterModule, ReactiveFormsModule],
    templateUrl: './register.component.html',
    standalone: true,
    styleUrl: './register.component.css'
})

export class RegisterComponent {

    registerForm: FormGroup;

    constructor(
        private http: HttpClient,
        private fb: FormBuilder
    ) {
        this.registerForm = this.fb.group({
            username: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        })
    }

     onSubmit() {
        const formData = {
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };

        this.http.post(`${ApiConfig.apiUrl}/users/register`, formData).subscribe()
    }

    get username(){
        return this.registerForm.get('username');
    }

    get email(){
        return this.registerForm.get('email');
    }

    get password(){
        return this.registerForm.get('password');
    }

}
