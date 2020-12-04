import { IBase } from './base.interface';

export interface IShoppinglist extends IBase {
    name: string,
    items: string[],
}
