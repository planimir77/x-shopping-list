import { IBase, IUser } from '.';

export interface IItem extends IBase{
    itemName: string,
    subscribers: IUser[],
    userId: IUser,
}
