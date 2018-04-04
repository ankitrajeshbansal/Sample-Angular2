import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../../Model/user';
import { IVmUser } from '../../Model/vmuser';
import { DBOperation } from '../../Shared/enum';
import { Observable } from 'rxjs/Rx';
import { Global } from '../../Shared/global';
import { UserManageComponent } from '../user/usermanage.component'

@Component({
    templateUrl: 'src/app/Components/user/user.component.html'
})

export class UserComponent implements OnInit {

   
    users: IUser[];
    vmuser: IVmUser;   
    indLoading: boolean = false;
    msg: string;

    constructor(private fb: FormBuilder, private _userService: UserService) { }

    ngOnInit(): void {
        this.vmuser = <IVmUser>{ User: null, dbops: null };
        this.LoadUsers();
    }

    LoadUsers(): void {
        this.indLoading = true;
        this._userService.get(Global.BASE_USER_ENDPOINT)
            .subscribe(users => { this.users = users; this.indLoading = false; },
            error => this.msg = <any>error);
    }

    addUser() {
        this.vmuser.dbops = null;
        this.vmuser.dbops = DBOperation.create;
    }

    editUser(id: number) {
        this.vmuser.dbops = null;
        this.vmuser.dbops = DBOperation.update;       
        this.vmuser.User = this.users.filter(x => x.Id == id)[0];
    }

    deleteUser(id: number) {
        this.vmuser.dbops = null;
        this.vmuser.dbops = DBOperation.delete;
        this.vmuser.User = this.users.filter(x => x.Id == id)[0];
    }

    loadUserChanged() {
        this.LoadUsers();
    }
    
}