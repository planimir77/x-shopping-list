import { IBase } from './base.interface';
import { IShoppinglist } from './shoppinglist.interface';

export interface IUser extends IBase {
    shoppinglist: IShoppinglist[];
    email: string;
    username: string;
    password: string;
}
