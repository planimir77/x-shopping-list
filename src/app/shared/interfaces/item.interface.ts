import { IBase, IShoppinglist, IUser,  } from '.';

export interface IItem extends IBase{
    itemName: string,
    subscribers: string[],
    shoppinglists: IShoppinglist[],
    userId: IUser,
}
