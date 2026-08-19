import { Api } from './Api.ts';
import { IProductsResponse, IOrderData, IOrderResult } from '../../types/index.ts';

export class LarekApi {
  private _api: Api;

  constructor(apiInstance: Api) {
    this._api = apiInstance;
  }

  // Получить список товаров
  getProducts(): Promise<IProductsResponse> {
    return this._api.get<IProductsResponse>('/product/');
  }

  // Отправить заказ 
  postOrder(orderData: IOrderData): Promise<IOrderResult> {
    return this._api.post<IOrderResult>('/order/', orderData);
  }
}