import {
    Component,
    OnInit,
    Input,
    SimpleChange,
    ViewChild,
    KeyValueDiffers,
    DoCheck,
    Output,
    EventEmitter,
    ElementRef,
    OnDestroy
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { IUser } from '../../Model/user';
import { IVmUser } from '../../Model/vmuser';
import { DBOperation } from '../../Shared/enum';
import { Observable } from 'rxjs/Observable';
import { Global } from '../../Shared/global';
import { Subscription } from 'rxjs/Subscription'

@Component({
    selector: 'user-manage',
    templateUrl: 'src/app/Components/user/usermanage.component.html'
})
export class UserManageComponent implements OnInit, OnDestroy  {
    @Input()
    vmuser: IVmUser;

    @Output()
    onLoadUserChanged: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('modal') modal: ModalComponent;

    msg: string;
    userFrm: FormGroup;
    modalTitle: string;
    modalBtnTitle: string;
    differ: any;

    paramSubscription: Subscription;
    constructor(
        private fb: FormBuilder,
        private _userService: UserService,
        private differs: KeyValueDiffers,
        private route: ActivatedRoute) {
        this.differ = differs.find({}).create(null);
    }

    ngOnInit(): void {
        //this.route.snapshot.params["id"];
        this.route.params.subscribe(
            (params: Params) => {
                let id = params['id']; 
                if (id != null) {
                    this.paramSubscription=  this._userService.get(Global.BASE_USER_ENDPOINT + id)
                        .subscribe(users => {
                            this.vmuser = { User: users, dbops: DBOperation.update };
                            this.modal.open();
                        },
                        error => this.msg = <any>error);
                }
            }
        );
        this.userFrm = this.fb.group({
            Id: [''],
            FirstName: ['', Validators.required],
            LastName: [''],
            Gender: ['', Validators.required]
        });
    }

    ngDoCheck() {
        var changes = this.differ.diff(this.vmuser);
        if (changes) {
            switch (this.vmuser.dbops) {
                case DBOperation.create:
                    this.SetControlsState(true);
                    this.modalTitle = "Add New User";
                    this.modalBtnTitle = "Add";
                    this.userFrm.reset();
                    this.modal.open();
                    break;
                case DBOperation.update:
                    this.SetControlsState(true);
                    this.modalTitle = "Edit User";
                    this.modalBtnTitle = "Update";
                    this.userFrm.setValue(this.vmuser.User);
                    this.modal.open();
                    break;
                case DBOperation.delete:
                    this.SetControlsState(false);
                    this.modalTitle = "Confirm to Delete?";
                    this.modalBtnTitle = "Delete";
                    this.userFrm.setValue(this.vmuser.User);
                    this.modal.open();
                    break;
            }

        } else {
            console.log('nothing changed');
        }
    }

    onSubmit(formData: any) {
        this.msg = "";
        switch (this.vmuser.dbops) {
            case DBOperation.create:
                this._userService.post(Global.BASE_USER_ENDPOINT, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully added.";
                            this.onLoadUserChanged.emit();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.update:
                this._userService.put(Global.BASE_USER_ENDPOINT, formData._value.Id, formData._value).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully updated.";
                            this.onLoadUserChanged.emit();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;
            case DBOperation.delete:
                this._userService.delete(Global.BASE_USER_ENDPOINT, formData._value.Id).subscribe(
                    data => {
                        if (data == 1) //Success
                        {
                            this.msg = "Data successfully deleted.";
                            this.onLoadUserChanged.emit();
                        }
                        else {
                            this.msg = "There is some issue in saving records, please contact to system administrator!"
                        }

                        this.modal.dismiss();
                    },
                    error => {
                        this.msg = error;
                    }
                );
                break;

        }
    }

    SetControlsState(isEnable: boolean) {
        isEnable ? this.userFrm.enable() : this.userFrm.disable();
    }

    //Route is not tightly coupled with component so 
    //route param subscription exists when back again.
    // need to unsubscribe on component destroy
    ngOnDestroy(): void {
        this.paramSubscription.unsubscribe();
    }
}
