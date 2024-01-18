export default class Order {
    id: number;
    orderedDate: string;
    status: string;
    total: number;
    items: {
      quantity: number;
      subTotal: number;
      product: {
        id: number;
        productName: string;
        price: number;
      };
    }[];
    user: {
      userName: string;
    };
  
    constructor(
      id: number,
      orderedDate: string,
      status: string,
      total: number,
      items: {
        quantity: number;
        subTotal: number;
        product: {
          id: number;
          productName: string;
          price: number;
        };
      }[],
      user: {
        userName: string;
      }
    ) {
      this.id = id;
      this.orderedDate = orderedDate;
      this.status = status;
      this.total = total;
      this.items = items;
      this.user = user;
    }
  }
  