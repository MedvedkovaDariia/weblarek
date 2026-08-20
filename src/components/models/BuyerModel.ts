import { IBuyer, TPayment } from '../../types';

type TValidationErrors = Partial<Record<keyof IBuyer, string>>;

export class BuyerModel {
  private payment: TPayment | null = null ;
  private address: string = '';
  private email: string = '';
  private phone: string = '';

  // Cохранить данные 
  setData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) this.payment = data.payment;
    if (data.address !== undefined) this.address = data.address;
    if (data.email !== undefined) this.email = data.email;
    if (data.phone !== undefined) this.phone = data.phone;
  }

   // Получить данные
   getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone,
    };
  }

  // Проверить данные
  validate(): TValidationErrors {
    const errors: TValidationErrors = {};

    if (!this.payment) {
      errors.payment = 'Не выбран способ оплаты';
    }
    if (!this.address.trim()) {
      errors.address = 'Введите адрес доставки';
    }
    if (!this.email.trim()) {
      errors.email = 'Укажите email';
    }
    if (!this.phone.trim()) {
      errors.phone = 'Укажите телефон';
    }
    return errors;
  }

  // Очистить данные
  clear(): void {
    this.payment = null;
    this.address = '';
    this.email = '';
    this.phone = '';
  }
}