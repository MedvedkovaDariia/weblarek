import { IProduct } from '../../types';


export class CartModel {
  private items: IProduct[] = [];

  //Получить список товаров в корзине
  getItems(): IProduct[] {
    return this.items;
  }

  // Добавить товар в корзину(если его ещё нет)
  addItem(item: IProduct): void {
    if (!this.contains(item.id)) {
      this.items.push(item);
    }
  }

  // Удалить товар по id из корзины 
    removeItem(id: string): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  // Очистить корзину
  clear(): void {
    this.items = [];
  }

   // Общая стоимость (суммируем price, игнорируем null)
  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  }

  // Количество товара
  getCount(): number {
    return this.items.length;
  }

  // Проверить, есть ли товар с данным id
  contains(id: string): boolean {
    return this.items.some(item => item.id === id);
  }
}