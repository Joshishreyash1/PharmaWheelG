import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-product-by-catagory',
  templateUrl: './product-by-catagory.component.html',
  styleUrls: ['./product-by-catagory.component.scss']
})
export class ProductByCatagoryComponent {

  topDealsByCatagory: any;

  constructor(private http: HttpService) {

  }
  ngOnInit() {
    this.getProductDetailByCatagory()
  }

  getProductDetailByCatagory() {
    this.http.getDataFromServer('top-deals-by-category').subscribe({
      next: (response: any) => {
        if (response && response.length > 0) {
          this.topDealsByCatagory = response;
        }
      },
      error: (error: any) => {

      }
    })
  }

}
