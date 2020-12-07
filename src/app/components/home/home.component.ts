import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'My Book Shop';

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
    //  productIcon: 'https://scontent.fhan1-1.fna.fbcdn.net/v/t1.0-9/95581346_1170419383291695_7159944072818327552_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=7gDIolsEjWUAX9SLUJj&_nc_ht=scontent.fhan1-1.fna&oh=791c7ffff10927a5335a8adc14c0a25d&oe=5FF46937',
      productStatus: 0,
      categoryType: 0,
      createTime: '2018-03-10T11:44:25.000+0000',
      updateTime: '2018-03-10T11:44:25.000+0000'
    }
  ];

  constructor(private productService: ProductService) {
    
  }

  ngOnInit(): void {
  }

}
