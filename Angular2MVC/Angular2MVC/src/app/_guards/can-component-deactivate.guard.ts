import { Observable } from 'rxjs/Observable';
import {
    CanDeactivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

export interface OnComponentDeactivate  {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<OnComponentDeactivate >
{
    canDeactivate(component: OnComponentDeactivate ,
        currentroute: ActivatedRouteSnapshot,
        currentstate: RouterStateSnapshot,
        nextstate?: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return component.canDeactivate();
    }
}