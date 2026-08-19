import { IBuyer, TPayment } from '../../../types';

type TValidationErrors = Partial<Record<keyof IBuyer, string>>;

export class BuyerModel {
  private _payment: TPayment | null = null;
  private _address: string = '';
  private _email: string = '';
  private _phone: string = '';

  // Cохранить данные 
  setData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this._payment = data.payment;
    if (data.address !== undefined) this._address = data.address;
    if (data.email !== undefined) this._email = data.email;
    if (data.phone !== undefined) this._phone = data.phone;
  }

   // Получить данные
   getData(): IBuyer {
    return {
      payment: this._payment as TPayment, // можно добавить проверку, что не null
      address: this._address,
      email: this._email,
      phone: this._phone,
    };
  }

  // Проверить данные
  validate(): TValidationErrors {
    const errors: TValidationErrors = {};

    if (!this._payment) {
      errors.payment = 'Не выбран способ оплаты';
    }
    if (!this._address.trim()) {
      errors.address = 'Введите адрес доставки';
    }
    if (!this._email.trim()) {
      errors.email = 'Укажите email';
    }
    if (!this._phone.trim()) {
      errors.phone = 'Укажите телефон';
    }
    return errors;
  }

  // Очистить данные
  clear(): void {
    this._payment = null;
    this._address = '';
    this._email = '';
    this._phone = '';
  }
}