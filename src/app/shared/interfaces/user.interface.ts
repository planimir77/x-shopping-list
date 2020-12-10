import { IBase, IShoppinglist } from '.';

export interface IUser extends IBase {
    shoppinglist: IShoppinglist[];
    email: string;
    username: string;
    password: string;
}
