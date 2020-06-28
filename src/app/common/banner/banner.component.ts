import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'banner-component',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss']
  })
  export class BannerComponent implements OnInit {
  
    constructor() { }

    images = [
      {
        title: "Lets amants (The lovers). 1928, Rene Magritte. Oil on canvas", 
        price: 23,
        id: 1,
        url: "slider.jpg"
      },
      {
        title: "Ships. 1834, Vereshagin. Oil on canvas", 
        price: 42,
        id: 2,
        url: "slider2.jpg"
      },
      {
        title: "See, boat and other stuf. 1765, Rene Mone. Oil on canvas", 
        price: 37,
        id: 3,
        url: "slider3.jpg"
      },
    ]

    current:any;
    timerRef:any;
    index:any = 0;
    opacity:number = 1;
  
    ngOnInit() { 
      //this.current = this.images[0];
      this.switchImg(0);
    }

    switchImg(index:number){
      clearTimeout(this.timerRef);
      this.index = index;
      this.current = this.images[index];
      let nextIndex = index < this.images.length-1? index+1:0;
      this.opacity = 0;
      setTimeout(()=>{this.opacity = 1},200);
      this.timerRef = setTimeout(this.switchImg.bind(this, nextIndex), 5000);
    }
  
  }