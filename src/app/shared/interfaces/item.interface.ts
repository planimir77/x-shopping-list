import { IBase, IUser } from '.';

export interface Item extends IBase{
    itemName: string,
    userId: IUser,
}
