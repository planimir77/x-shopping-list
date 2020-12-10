import { IUser, IBase } from '.';

export interface IShoppinglist extends IBase {
    shoppinglistName: string,
    subscribers: IUser[],
    items: string[],
    userId: IUser,
}
