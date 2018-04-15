import { OnInit, Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: 'src/app/Components/error/error.component.html'
})
export class ErrorComponent implements OnInit{

    errorMessage: string;
    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.errorMessage = this.route.snapshot.data['message'];
    }

}