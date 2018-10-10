import { DeliveryRequest } from "../entity/Delivery";

export class CreditCardDetails{
  ExpiredMonth: string;
  ExpiredYear: string;
  Holder: string;
  Number: string;
  TypeShortName: string;
  CVV: string;
}

export class BuyPackageData{
  PackageId: number;
  SimCardRequired: boolean;
  FlyDate: string;
  ReturnDate: string;
  CreditCard: object;
  Coupone: string;
  Delivery: object;
  Currency: string;
}
