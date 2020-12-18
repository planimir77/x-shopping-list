import { IBase, IShoppinglist, IUser,  } from '.';

export interface IItem extends IBase{
    itemName: string,
    subscribers: IShoppinglist[],
    shoppinglists: IShoppinglist[],
    userId: IUser,
}
