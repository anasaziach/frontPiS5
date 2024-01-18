export default class ProduitPanier {
    quantity: number;
    subTotal: number;
    product: {
      id: number;
      productName: string;
      price: number;
    };
  
    constructor(
      quantity: number,
      subTotal: number,
      productId: number,
      productName: string,
      productPrice: number
    ) {
      this.quantity = quantity;
      this.subTotal = subTotal;
      this.product = {
        id: productId,
        productName: productName,
        price: productPrice,
      };
    }
  }