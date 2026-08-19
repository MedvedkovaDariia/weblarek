import { IProduct } from '../../../types';


export class ProductsModel {
  private _items: IProduct[] = [];
  private _selectedItem: IProduct | null = null ;

  // Сохранить массив товаров
  setItems(items:IProduct[]): void{
    this._items = items;
  }

  // Получить массив товаров
  getItems(): IProduct[]{
      return this._items;
  }
   
  //Получить выбранную карточку
  getItemById(id: string): IProduct | undefined {
     return this._items.find(item => item.id === id);
  }

  // Сохранить товар выбранную карточку
  setSelectedItem(item: IProduct): void {
    this._selectedItem = item;
  }

  // Получить выбранный товар
  getSelectedItem(): IProduct | null {
    return this._selectedItem;
  }
}
