import { IUser } from './user';
import { DBOperation } from '../Shared/enum';

export interface IVmUser {
    User: IUser,
    dbops: DBOperation
}