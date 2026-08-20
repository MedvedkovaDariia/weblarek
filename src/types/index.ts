export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export type TPayment = 'card' | 'cash';

export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
} 

export interface IBuyer {
  payment: TPayment | null;
  email: string;
  phone: string;
  address: string;
} 

// Тип для данных, отправляемых на сервер при оформлении заказа
export type IOrderData = IBuyer & {
  total: number;
  items: string[];
}; 

// Тип ответа сервера при получении списка товаров
export interface IProductsResponse {
  items: IProduct[];
  total: number;
}

// Тип ответа сервера при оформлении заказа
export interface IOrderResult {
  id: string;
  total: number;
}