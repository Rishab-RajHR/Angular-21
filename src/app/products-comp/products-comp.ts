import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products-comp',
  styleUrl: './products-comp.css',
  templateUrl: './products-comp.html',
})
export class ProductsComp {
    category: string | null = null;
    sort: string | null = null;

    constructor( private route: ActivatedRoute) {
        this.route.queryParamMap.subscribe( params => {
             this.category = params.get('category');
             this.sort = params.get('sort');
        })
    }
}
