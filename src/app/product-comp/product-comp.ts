import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product-comp',
  styleUrl: './product-comp.css',
  templateUrl: './product-comp.html',
})
export class ProductComp {
     productId!: string;

     constructor( private route: ActivatedRoute) {
        // this.productId = this.route.snapshot.paramMap.get('id') || '';
        this.route.paramMap.subscribe( (params)=>{
            this.productId = params.get('id') || '';
        })
     }
}
