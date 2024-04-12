import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-top-deal',
  templateUrl: './top-deal.component.html',
  styleUrls: ['./top-deal.component.scss']
})
export class TopDealComponent {


  topDeals: any = [];
  constructor(private httpService: HttpService) {

  }
   
  ngOnInit() {
    this.getTopDeals();
  };

  getTopDeals() {
    const endPointName = "top-deals";
    this.httpService.getDataFromServer(endPointName).subscribe({
      next: (response: any) => {
        if (response && response.length > 0){
          this.topDeals = response;
          console.log("Top Deals ", this.topDeals)
        }
      },
      error: () => {

      }
    })

    // throw new Error ('method not implemented.') ;
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }
}
