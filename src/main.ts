import './scss/styles.scss';

import { Api } from './components/base/Api';
import { apiProducts } from './utils/data';

import { ProductsModel } from './components/base/Models/ProductsModel';
import { CartModel } from './components/base/Models/CartModel';
import { BuyerModel } from './components/base/Models/BuyerModel';

import { LarekApi } from './components/base/LarekApi';


const productModel = new ProductsModel();
const cartModel = new CartModel();
const buyerModel = new BuyerModel();

// Проверка работоспособности с данными из файла
productModel.setItems(apiProducts.items);
console.log('Все товары:', productModel.getItems());
console.log('Количество товаров в корзине: ', cartModel.getCount());
console.log('Данные о покупателе: ', buyerModel.getData());

// Проверка работоспособности с данными с сервера
console.log('=== ЗАПРОС К СЕРВЕРУ ===');
const baseUrl = import.meta.env.VITE_API_ORIGIN;
const api  = new Api(baseUrl);
const larekApi = new LarekApi(api);

larekApi.getProducts()
    .then(response => {
        console.log('Ответ от сервера:', response);``
        productModel.setItems(response.items);
        console.log('Каталог после сохранения с сервера:', productModel.getItems());
    })
  .catch(err => {
    console.error('Ошибка при получении товаров с сервера:', err);
});