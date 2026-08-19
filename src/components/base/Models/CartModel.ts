import { IProduct } from '../../../types';


export class CartModel {
  private _items: IProduct[] = [];

  //Получить список товаров в корзине
  getItems(): IProduct[] {
    return this._items;
  }

  // Добавить товар в корзину(если его ещё нет)
  addItem(item: IProduct): void {
    if (!this.contains(item.id)) {
      this._items.push(item);
    }
  }

  // Удалить товар по id из корзины 
    removeItem(id: string): void {
    this._items = this._items.filter(item => item.id !== id);
  }

  // Очистить корзину
  clear(): void {
    this._items = [];
  }

   // Общая стоимость (суммируем price, игнорируем null)
  getTotalPrice(): number {
    return this._items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  }

  // Количество товара
  getCount(): number {
    return this._items.length;
  }

  // Проверить, есть ли товар с данным id
  contains(id: string): boolean {
    return this._items.some(item => item.id === id);
  }
}