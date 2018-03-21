import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../Service/login.service';
import { Global } from '../Shared/global';

@Component({
    templateUrl: 'src/app/Components/login.component.html'
})

export class LoginComponent implements OnInit{
    msg: string;
    userFrm: FormGroup;

    constructor(private fb: FormBuilder, private _loginService: LoginService, private _router: Router) { }

    ngOnInit(): void {
        localStorage.clear();

        this.userFrm = this.fb.group({
            UserName: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    onSubmit(formData: any) {
        this.msg = "";
        this._loginService.post(Global.USER_LOGIN_ENDPOINT, formData._value).subscribe(
            data => {
                if (data == 1) //Success
                {
                    localStorage.setItem('currentUser', 'true');
                    this.msg = "Data successfully added.";
                    this._router.navigate(["home"]);
                }
                else {
                    localStorage.clear();
                    this.msg = "Username or password doesn't match."
                }
            },
            error => {
                this.msg = error;
            }
        );
    }
}