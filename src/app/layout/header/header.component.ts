import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  viewHeight:number = 0;
  showMenu:boolean = false;
  searchShown:boolean = false;
  showSearch:boolean = false;
  constructor( private router: Router ) { }

  ngOnInit() {
    if(this.router.url=="/home"||this.router.url=="/opportunities")
      this.showSearch = true;
    this.router.events.subscribe((event: Event)=>{
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        if(this.router.url=="/home"||this.router.url=="/opportunities")
          this.showSearch = true;
        else
          this.showSearch = false;
      }
      
    });
    this.viewHeight = document.documentElement.offsetHeight;
    setTimeout(()=>{this.viewHeight = document.documentElement.offsetHeight;},1000);
  }

  openSideMenu(){
    this.showMenu = true;
  }

  closeSideMenu(){
    this.showMenu = false;
  }

  toggleSearch(){
    if(this.searchShown){
      console.log("search started");
      this.searchShown = false;
    }
    else
      this.searchShown = true;
  }

}
