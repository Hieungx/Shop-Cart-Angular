import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfo } from 'src/app/model/ProductInfo';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  title="Product Detail";

  // product : ProductInfo =
  //   {
  //     productId: 'B0001',
  //     productName: 'Core Java',
  //     productPrice: 30.00,
  //     productStock: 96,
  //     productDescription: 'Book for learning java',
  //     productIcon: 'https://images-na.ssl-images-amazon.com/images/I/71w0GK2e7eL.jpg',
  //     productStatus: 0,
  //     categoryType: 0,
  //     createTime: '2018-03-10T11:44:25.000+0000',
  //     updateTime: '2018-03-10T11:44:25.000+0000'
  //   }
  products: any[] =[
    {
      productId: 'B0001',
      productName: 'Core Java',
      productPrice: 30.00,
      productStock: 96,
      productDescription: 'Book for learning java',
      productIcon: 'https://images-na.ssl-images-amazon.com/images/I/71w0GK2e7eL.jpg',
      productStatus: 0,
      categoryType: 0,
      createTime: '2018-03-10T11:44:25.000+0000',
      updateTime: '2018-03-10T11:44:25.000+0000'
    },
    {
      producId: 'B0002',
      productName: 'Python',
      productPrice: 59.00,
      productStock: 100,
      productDescription: 'Book for learning Python',
      productIcon: 'https://images-na.ssl-images-amazon.com/images/I/51tjBN6kkEL._SX374_BO1,204,203,200_.jpg',
      productStatus: 1,
      categoryType: 0,
      createTime: '2018-03-10T11:44:25.000+0000',
      updateTime: '2018-03-10T11:44:25.000+0000'
    },
    {
      producId: 'B0003',
      productName: 'Deep Learning',
      productPrice: 72.00,
      productStock: 23,
      productDescription: 'Book for learning DI',
      productIcon: 'https://images-na.ssl-images-amazon.com/images/I/71IcMdUyGYL.jpg',
      productStatus: 0,
      categoryType: 0,
      createTime: '2018-03-10T11:44:25.000+0000',
      updateTime: '2018-03-10T11:44:25.000+0000'
    }
  ];

  product: any;
  count : number =1 ;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.product = this.products.filter(e => e.productId == id)[0]
  }

  ngDestroy(): void{

  }

  validateCount(){
    console.log('validate');
    const max = this.product.productStock;
    if(this.count > max){
      this.count = max;
    } else if(this.count <1){
      this.count = 1;
    }
  }

  onSubmit(){
    console.log('Khong thanh cong');
  }

}
