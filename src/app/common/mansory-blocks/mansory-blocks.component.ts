import { Component, OnInit, Input } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'mansory-blocks-component',
  templateUrl: './mansory-blocks.component.html',
  styleUrls: ['./mansory-blocks.component.scss', '../../../../node_modules/ng-masonry-grid/ng-masonry-grid.css']
})
export class MansoryBlocksComponent implements OnInit {

  constructor() { }
  @Input('blocks') masonryItems:Array<any>;
  @Input('order') sec:number;
  show:boolean = false;
  ngOnInit() {
    setTimeout(()=>{
      this.show = true;
    }, this.sec*300);
  }

}