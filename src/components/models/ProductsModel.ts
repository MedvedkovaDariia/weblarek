import { IProduct } from '../../types';


export class ProductsModel {
  private items: IProduct[] = [];
  private selectedItem: IProduct | null = null ;

  // Сохранить массив товаров
  setItems(items:IProduct[]): void{
    this.items = items;
  }

  // Получить массив товаров
  getItems(): IProduct[]{
      return this.items;
  }
   
  //Получить выбранную карточку
  getItemById(id: string): IProduct | undefined {
     return this.items.find(item => item.id === id);
  }

  // Сохранить товар выбранную карточку
  setSelectedItem(item: IProduct): void {
    this.selectedItem = item;
  }

  // Получить выбранный товар
  getSelectedItem(): IProduct | null {
    return this.selectedItem;
  }
}
