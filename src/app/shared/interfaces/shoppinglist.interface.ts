import { IUser, IBase, IItem } from '.';

export interface IShoppinglist extends IBase {
    shoppinglistName: string,
    subscribers: IUser[],
    items: IItem[],
    userId: IUser,
}
