import { afterEveryRender, afterNextRender, Component, Input, SimpleChange } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child',
  styleUrl: './child.css',
  templateUrl: './child.html',
})
export class Child {
    @Input() title!:string;
    constructor(){
        console.log("1.Constructor");
        afterNextRender(()=>{
            console.log("4.AfterNextRender");
        })
        afterEveryRender(()=>{
            console.log("4.AfterEveryRender");
        })
    }
    ngOnchanges(change: SimpleChange){
      console.log("2.ngOnChanges", change);
    }
    ngOnInit(){
       console.log("3.ngOnInit");
    }
    ngOnDestroy(){
       console.log("5.ngOnDestroy");
    }
}
