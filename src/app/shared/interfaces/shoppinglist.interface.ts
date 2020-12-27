import { IUser, IBase, IItem } from '.';

export interface IShoppinglist extends IBase {
    [x: string]: any;
    shoppinglistName: string,
    subscribers: IUser[],
    items: IItem[],
    userId: IUser,
}
