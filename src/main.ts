import './scss/styles.scss';

import { Api } from './components/base/Api';
import { apiProducts } from './utils/data';

import { ProductsModel } from './components/models/ProductsModel';
import { CartModel } from './components/models/CartModel';
import { BuyerModel } from './components/models/BuyerModel';

import { LarekApi } from './components/LarekApi';
import { API_URL } from './utils/constants';


const productModel = new ProductsModel();
const cartModel = new CartModel();
const buyerModel = new BuyerModel();

// Проверка работоспособности с данными из файла
//Тестирование каталога и выбранного товара
productModel.setItems(apiProducts.items);
console.log('Все товары:', productModel.getItems());

const firstProduct = productModel.getItems()[0]; // берём первый товар из каталога
if (firstProduct) {
  const foundProduct = productModel.getItemById(firstProduct.id);
  console.log(`Первый товар в каталоге ("${firstProduct.id}"):`, foundProduct);

  productModel.setSelectedItem(firstProduct);
  console.log('Выбранный товар: ', productModel.getSelectedItem());
}

//Тестирование корзины
const product1 = productModel.getItems()[0];
const product2 = productModel.getItems()[1];
cartModel.addItem(product1);
cartModel.addItem(product2);
console.log('Количество товаров в корзине: ', cartModel.getCount());
console.log('В корзине следующие товары: ', cartModel.getItems());
console.log(`Общая стоимость товаров в корзине: `, cartModel.getTotalPrice());
cartModel.removeItem(product1.id);
console.log(`Удален товар ("${product1.id}"). Количество товаров в корзине: `, cartModel.getCount());
console.log(`Наличие товара ("${product1.id}") в корзине: `, cartModel.contains(product1.id));
console.log(`Общая стоимость товаров в корзине: `, cartModel.getTotalPrice());
cartModel.clear();
console.log(`Очистили корзину. Количество товаров в корзине: `, cartModel.getCount());

//Тестирование с данными покупателя
buyerModel.setData({ payment: 'card', address: 'ул. Пушкина, д.1' });
console.log('Данные о покупателе (добавлены частично): ', buyerModel.getData());
buyerModel.setData({ email: 'test@example.com', phone: '+79991234567' });
console.log('Данные о покупателе: ', buyerModel.getData());
console.log('Валидация данных:', buyerModel.validate());
buyerModel.clear();
console.log('Очистили данные. Данные о покупателе: ', buyerModel.getData());



// Проверка работоспособности с данными с сервера
console.log('=== ЗАПРОС К СЕРВЕРУ ===');

const api  = new Api(API_URL);
const larekApi = new LarekApi(api);

larekApi.getProducts()
    .then(response => {
        console.log('Ответ от сервера:', response);
        productModel.setItems(response.items);
        console.log('Каталог после сохранения с сервера:', productModel.getItems());
    })
  .catch(err => {
    console.error('Ошибка при получении товаров с сервера:', err);
});