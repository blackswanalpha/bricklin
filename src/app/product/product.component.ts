import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from './product';
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];

  constructor(private _service: NotificationsService, private http: HttpClient, private productService: ProductService) { }

  ngOnInit(): void {

    this.getProduct()
  }


  public getProduct(): void {
    this.productService.getproduct().subscribe(
      (response: Product[]) => {

        this.product = response;
        // this.loadingHandler.finish();
        this._service.success('Hello world!', 'Toastr fun!', {
          position: ['bottom', 'right'],
          timeOut: 5000,
          animate: 'fade',
          pauseOnHover: true,
          maxLength: 10,
          showProgressBar: true
        });
        console.log(this.product);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

}
