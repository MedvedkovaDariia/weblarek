import { IApi } from '../types';
import { IProductsResponse, IOrderData, IOrderResult } from '../types';

export class LarekApi {
  private api: IApi;

  constructor(apiInstance: IApi) {
    this.api = apiInstance;
  }

  // Получить список товаров
  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>('/product/');
  }

  // Отправить заказ 
  postOrder(orderData: IOrderData): Promise<IOrderResult> {
    return this.api.post<IOrderResult>('/order/', orderData);
  }
}