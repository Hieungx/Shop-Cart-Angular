import { ProductInfo } from './ProductInfo';

export class ProductInOrder{
    productId: string;
    productName: string;
    productPrice: number;
    productStock: number;
    productDescription: string;
    productIcon: string;
    categoryType: number;
    count: number;

    constructor(productInfor:ProductInfo,quantity =1){
        this.productId = productInfor.productId;
        this.productName = productInfor.productName;
        this.productPrice = productInfor.productPrice;
        this.productStock = productInfor.productStock;
        this.productDescription = productInfor.productDescription;
        this.productIcon = productInfor.productIcon;
        this.categoryType = productInfor.categoryType;
        this.count = quantity;
    }
}